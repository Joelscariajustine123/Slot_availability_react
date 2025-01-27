import express from 'express';
import { createBooking, updateBooking, deleteBooking } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/create', createBooking);
router.put('/update', updateBooking);
router.delete('/delete', deleteBooking);

export default router; 