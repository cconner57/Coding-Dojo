var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');
var movie = require('../controllers/movies.js');

module.exports = function(app){
    
    app.get('/', movie.index);
	app.get('/movie/:id', movie.show_one);
	app.post('/movie/new', movie.create);
	app.put('/movie/:id', movie.update);
	app.delete('/delete/:id', movie.delete);

}