exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId)
      .then(product => {
        return product.destroy();
      })
      .then(result => {
        console.log('DESTROYED PRODUCT');
        res.redirect('/admin/products');
      })
      .catch(err => console.log(err));
  };