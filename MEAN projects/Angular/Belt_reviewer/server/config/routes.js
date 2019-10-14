const rideController = require('./../controllers/rides.js');
const path = require('path');

module.exports = app => {
    app.get('/api/rides', rideController.allRides);
    app.post('/api/rides', rideController.addRide);
    app.put('/api/rides/:id', rideController.editRide);
    app.get('/api/rides/:id', rideController.singleRide);
    app.delete('/api/rides/:id', rideController.removeRide);
    app.post('/api/rides/:id/passenger', rideController.addPassenger);
    app.delete('/api/rides/:r_id/passenger/:p_id', rideController.removePassenger);
    
    app.all('*', (req, res) => res.sendFile(path.resolve('./public/dist/public/index.html')))
}