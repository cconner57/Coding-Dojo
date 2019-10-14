const AuthorsCtrl = require('./../controllers/AuthorsCtrl.js');

module.exports = (app) => {
    app.get('/api/authors', AuthorsCtrl.index);
    app.get('/api/authors/:id', AuthorsCtrl.show)
    app.post('/api/authors', AuthorsCtrl.create)
}