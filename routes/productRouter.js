const express = require('express')
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController')

const router = express.Router()

router.route('/').get(getAllProducts).post(createProduct)
router
  .route('/product/:id')
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct)

module.exports = router
