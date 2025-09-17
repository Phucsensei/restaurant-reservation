export interface Reservation {
  id: number;
  table_id: number;
  user_id: number;
  reservation_date: Date;
  start_time: string;
  duration_minutes: number;
  guests: number;
  special_request?: string;
  status: 'pending' | 'confirmed' | 'canceled';
  created_at?: Date;
  updated_at?: Date;
}

export interface CreateReservationDto {
  table_id: number;
  reservation_date: string;
  start_time: string;
  duration_minutes?: number;
  guests: number;
  special_request?: string;
}

export interface UpdateReservationDto {
  status?: 'pending' | 'confirmed' | 'canceled';
  guests?: number;
  special_request?: string;
}