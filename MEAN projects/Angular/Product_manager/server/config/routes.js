const ProductCtrl = require('./../controllers/ProductCtrl.js');

module.exports = app => {
    app.get('/product', ProductCtrl.index)
}