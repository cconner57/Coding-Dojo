const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

module.exports = {
    index: (req, res) => {
        Pet.find({}, (err, pets) => {
            if(err) {
                res.json(err);
            } else {
                res.json(pets);
            }
        })
    },

    create: (req, res) => {
        Pet.create(req.body, (err, pet) => {
            if(err) {
                res.json(err);
            } else {
                res.json(pet);
            }
        });
    },

    show: (req, res) => {
        Pet.findOne({ _id: req.params.id }, (err, pet) => {
            if(err) {
                res.json(err);
            } else {
                res.json(pet);
            }
        });
    },

    edit: (req, res) => {
        Pet.update({ _id:req.params.id }, req.body, {runValidators: true}, (err, pet) => {
            if(err) {
                res.json(err);
            } else {
                res.json(pet);
            }
        })
    },

    delete: (req, res) => {
        Pet.findOneAndDelete({ _id: req.params.id }, (err, data) => {
            if(err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }
}