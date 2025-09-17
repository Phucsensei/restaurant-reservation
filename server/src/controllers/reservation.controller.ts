// src/controllers/reservation.controller.ts
import { Request, Response } from 'express';
import { ReservationService } from '../services/reservation.service';

export class ReservationController {
    private reservationService: ReservationService;

    constructor() {
        this.reservationService = new ReservationService();
    }

    async create(req: Request, res: Response) {
        try {
            if (!req.user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const userId = req.user.id;
            const reservation = await this.reservationService.create(userId, req.body);
            res.status(201).json(reservation);
        } catch (error: any) {
            res.status(400).json({ message: error?.message || 'Failed to create reservation' });
        }
    }

    async getMyReservations(req: Request, res: Response) {
        try {
            if (!req.user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const userId = req.user.id;
            const reservations = await this.reservationService.getByUserId(userId);
            res.json(reservations);
        } catch (error: any) {
            res.status(400).json({ message: error?.message || 'Failed to get reservations' });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            if (!req.user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const userId = req.user.id;
            const reservation = await this.reservationService.getById(
                parseInt(req.params.id),
                userId
            );
            res.json(reservation);
        } catch (error: any) {
            res.status(404).json({ message: error?.message || 'Reservation not found' });
        }
    }

    async update(req: Request, res: Response) {
        try {
            if (!req.user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const userId = req.user.id;
            const reservation = await this.reservationService.update(
                parseInt(req.params.id),
                userId,
                req.body
            );
            res.json(reservation);
        } catch (error: any) {
            res.status(400).json({ message: error?.message || 'Failed to update reservation' });
        }
    }

    async cancel(req: Request, res: Response) {
        try {
            if (!req.user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const userId = req.user.id;
            const reservation = await this.reservationService.cancel(
                parseInt(req.params.id),
                userId
            );
            res.json(reservation);
        } catch (error: any) {
            res.status(400).json({ message: error?.message || 'Failed to cancel reservation' });
        }
    }
}