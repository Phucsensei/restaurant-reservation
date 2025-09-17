// src/services/reservation.service.ts
import { db } from '../config/db';
import { CreateReservationDto, UpdateReservationDto, Reservation } from '../types/reservation.types';

export class ReservationService {
  // Kiểm tra xem bàn có trống trong khoảng thời gian không
  async isTableAvailable(
    tableId: number,
    date: string,
    startTime: string,
    duration: number
  ): Promise<boolean> {
    const endTime = new Date(`${date} ${startTime}`);
    endTime.setMinutes(endTime.getMinutes() + duration);

    const result = await db.query(
      `SELECT COUNT(*) 
       FROM reservations 
       WHERE table_id = $1 
       AND reservation_date = $2
       AND status != 'canceled'
       AND (
         ($3 BETWEEN start_time AND (start_time + (duration_minutes || ' minutes')::interval))
         OR 
         ($4 BETWEEN start_time AND (start_time + (duration_minutes || ' minutes')::interval))
       )`,
      [tableId, date, startTime, endTime.toTimeString().split(' ')[0]]
    );

    return parseInt(result.rows[0].count) === 0;
  }

  // Tạo reservation mới
  async create(userId: number, dto: CreateReservationDto): Promise<Reservation> {
    // Kiểm tra bàn có trống không
    const isAvailable = await this.isTableAvailable(
      dto.table_id,
      dto.reservation_date,
      dto.start_time,
      dto.duration_minutes || 90
    );

    if (!isAvailable) {
      throw new Error('Table is not available at this time');
    }

    const result = await db.query(
      `INSERT INTO reservations 
       (table_id, user_id, reservation_date, start_time, duration_minutes, guests, special_request)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        dto.table_id,
        userId,
        dto.reservation_date,
        dto.start_time,
        dto.duration_minutes || 90,
        dto.guests,
        dto.special_request
      ]
    );

    return result.rows[0];
  }

  // Lấy tất cả reservations của user
  async getByUserId(userId: number): Promise<Reservation[]> {
    const result = await db.query(
      `SELECT r.*, t.name as table_name, t.capacity
       FROM reservations r
       JOIN tables t ON r.table_id = t.id
       WHERE r.user_id = $1
       ORDER BY r.reservation_date DESC, r.start_time DESC`,
      [userId]
    );
    return result.rows;
  }

  // Lấy chi tiết một reservation
  async getById(id: number, userId: number): Promise<Reservation> {
    const result = await db.query(
      `SELECT r.*, t.name as table_name, t.capacity
       FROM reservations r
       JOIN tables t ON r.table_id = t.id
       WHERE r.id = $1 AND r.user_id = $2`,
      [id, userId]
    );

    if (result.rows.length === 0) {
      throw new Error('Reservation not found');
    }

    return result.rows[0];
  }

  // Cập nhật reservation
  async update(id: number, userId: number, dto: UpdateReservationDto): Promise<Reservation> {
    const reservation = await this.getById(id, userId);

    if (reservation.status === 'canceled') {
      throw new Error('Cannot update canceled reservation');
    }

    const result = await db.query(
      `UPDATE reservations
       SET status = $1, guests = $2, special_request = $3, updated_at = NOW()
       WHERE id = $4 AND user_id = $5
       RETURNING *`,
      [
        dto.status || reservation.status,
        dto.guests || reservation.guests,
        dto.special_request || reservation.special_request,
        id,
        userId
      ]
    );

    return result.rows[0];
  }

  // Hủy reservation
  async cancel(id: number, userId: number): Promise<Reservation> {
    const result = await db.query(
      `UPDATE reservations
       SET status = 'canceled', updated_at = NOW()
       WHERE id = $1 AND user_id = $2
       RETURNING *`,
      [id, userId]
    );

    if (result.rows.length === 0) {
      throw new Error('Reservation not found');
    }

    return result.rows[0];
  }
}