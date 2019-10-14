const PetsCtrl = require('./../controllers/PetsCtrl.js');

module.exports = (app) => {
    app.get('/api/pets', PetsCtrl.index);
    app.get('/api/pets/:id', PetsCtrl.show);
    app.post('/api/pets/new', PetsCtrl.create);
    app.put('/api/pets/:id/edit', PetsCtrl.edit);
    app.delete('/api/pets/:id', PetsCtrl.delete);


}