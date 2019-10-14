const path = require('path');
const fs = require('fs');

var modelsPath = path.join(__dirname, './../models');

fs.readdirSync(modelsPath).forEach(function(file) {
    if (file.indexOf('.js') >= 0) {
        require(modelsPath + '/' + file);
    }
});