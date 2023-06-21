const ProductController = require('../controllers/product.controller');
module.exports = function (app) {
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/allProducts', ProductController.getAllProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
    app.patch('/api/products/:id', ProductController.updateProduct);
}
