const CommerceCtrl = require('./../controllers/CommerceCtrl.js');

module.exports = (app) => {
    app.get('/api/products', CommerceCtrl.index);
    app.get('/api/products/:id', CommerceCtrl.show);
    app.post('/api/products/new', CommerceCtrl.create);
    app.put('/api/products/:id/edit', CommerceCtrl.edit);
    app.delete('/api/products/:id', CommerceCtrl.delete);
}