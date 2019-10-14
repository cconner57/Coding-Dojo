const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    index: (req, res) => {
        Product.find({}, (err, data) => {
            if(err) {
                res.json(err);
            } else {
                res.json(data);
            }
        })
    },

    create: (req, res) => {
        Product.create(req.body, (err, product) => {
            if(err) {
                res.json(err);
            } else {
                res.json(product);
            }
        });
    },

    show: (req, res) => {
        Product.findOne({ _id: req.params.id }, (err, product) => {
            if(err) {
                res.json(err);
            } else {
                res.json(product);
            }
        });
    },

    edit: (req, res) => {
        Product.update({ _id:req.params.id }, req.body, {runValidators: true}, (err, product) => {
            if(err) {
                res.json(err);
            } else {
                res.json(product);
            }
        })
    },

    delete: (req, res) => {
        Product.findOneAndDelete({ _id: req.params.id }, (err, data) => {
            if(err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }

    
}