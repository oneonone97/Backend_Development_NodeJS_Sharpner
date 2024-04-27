const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

// Handle product deletion
router.post('/delete-product', (req, res, next) => {
    const productId = req.body.productId;
    Product.deleteById(productId)
      .then(() => {
        console.log('Product deleted successfully');
        res.redirect('/admin/products'); // Redirect to the product list page
      })
      .catch(err => {
        console.log(err);
        // Handle error (e.g., show an error page)
      });
  });

module.exports = router;
