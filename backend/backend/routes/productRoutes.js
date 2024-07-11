import express from 'express';
const router = express.Router();
import {
  fetchProducts,
  fetchProductById,
  fetchAllProducts,
  addProduct,
  updateProductDetails,
  removeProduct,
  addProductReview,
  fetchTopProducts,
  fetchNewProducts,
  filterProducts,
} from '../controllers/productController.js';
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js';

router.get('/', fetchProducts);
router.get('/top', fetchTopProducts);
router.get('/new', fetchNewProducts);
router.get('/all', fetchAllProducts);
router.post('/', authenticate, authorizeAdmin, addProduct);
router.put('/:id', authenticate, authorizeAdmin, updateProductDetails);
router.delete('/:id', authenticate, authorizeAdmin, removeProduct);
router.get('/:id', fetchProductById);
router.post('/:id/reviews', authenticate, addProductReview);
router.post('/filter', filterProducts);

export default router;
