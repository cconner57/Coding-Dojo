var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');



module.exports = {

    index: function(req, res) {
        Movie.find({},function(err,movies){
            if(err){
                res.json(err)
                console.log(err);
            }else{
                res.json(movies)
                console.log({message: "It worked!", data: movies});
            }
        });
    },

    create: function(req, res) {
        Movie.create(req.body, function(err, data){
            if (err){
                res.json(err);
            }
            else{
                res.json(data)
            }
        });
    },


    show_one: function(req, res) {
        Movie.findOne({_id:req.params.id},function(err,movies){
            if(err){
                res.json(err)
                console.log(err);
            }else{
                res.json(movies)
                console.log({message: "It worked!", data: movies});
            }
        });
    },

    update: function(req, res){
        Movie.findByIdAndUpdate({_id: req.params.id},{
            $set:{
                title: req.body.title,
                description: req.body.description
            }
        }, function(err, data){
            if(err)
                res.json(err);
            else
                res.json(data);
        })
    },


    delete: function(req,res){
        Movie.findByIdAndRemove({_id:req.params.id},function(err,data){
            if(err)
                res.json(err);
            else
                res.json(data);
        })
    },



}