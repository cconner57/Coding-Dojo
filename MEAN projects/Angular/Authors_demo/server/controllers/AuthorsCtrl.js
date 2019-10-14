const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = {
    index: (req, res) => {
        Author.find({}, (err, authors) => {
            if(err) {
                res.json(err);
            } else {
                res.json(authors);
            }
        })
    },

    create: (req, res) => {
        Author.create(req.body, (err, author) => {
            if(err) {
                res.json(err);
            } else {
                res.json(author);
            }
        });
    },

    show: (req, res) => {
        Author.findOne({ _id: req.params.id }, (err, author) => {
            if(err) {
                res.json(err);
            } else {
                res.json(author);
            }
        })
    }
}