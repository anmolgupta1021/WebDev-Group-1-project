import express from 'express';
const router = express.Router();
import {
  createOrder,
  getAllOrders,
  getUserOrders,
  countTotalOrders,
  calculateTotalSales,
  calcualteTotalSalesByDate,
  findOrderById,
  markOrderAsPaid,
  markOrderAsDelivered,
} from '../controllers/orderController.js';
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js';

router.post('/', authenticate, createOrder);
router.get('/', authenticate, authorizeAdmin, getAllOrders);
router.get('/user', authenticate, getUserOrders);
router.get('/total', authenticate, authorizeAdmin, countTotalOrders);
router.get('/totalsales', authenticate, authorizeAdmin, calculateTotalSales);
router.get('/salesbydate', authenticate, authorizeAdmin, calcualteTotalSalesByDate);
router.get('/:id', authenticate, findOrderById);
router.put('/:id/pay', authenticate, markOrderAsPaid);
router.put('/:id/deliver', authenticate, authorizeAdmin, markOrderAsDelivered);

export default router;
