import { Router } from 'express';
import { ReservationController } from '../controllers/reservation.controller';
import { authenticateToken } from '../middleware/auth.middleware'; // Sửa tên import

const router = Router();
const reservationController = new ReservationController();

router.use(authenticateToken); // Protect all routes

router.post('/', reservationController.create.bind(reservationController));
router.get('/my', reservationController.getMyReservations.bind(reservationController));
router.get('/:id', reservationController.getById.bind(reservationController));
router.patch('/:id', reservationController.update.bind(reservationController));
router.delete('/:id', reservationController.cancel.bind(reservationController));

export default router;