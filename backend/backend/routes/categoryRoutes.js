const express = require('express');
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');
const { authenticate, authorizeAdmin } = require('../middlewares/authMiddleware');


router.post('/', authenticate, authorizeAdmin, createCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.put('/:id', authenticate, authorizeAdmin, updateCategory);
router.delete('/:id', authenticate, authorizeAdmin, deleteCategory);

module.exports = router;
