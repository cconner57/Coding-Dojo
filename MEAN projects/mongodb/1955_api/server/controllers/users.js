var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
    show: function(req,res){
        User.find({}, function(err,users){
           if(err) {
            console.log('something went wrong');
            console.log(user.errors);
          }
          else {
            res.json(users);
          }
        })
    },
    create: function(req,res){
        var user = new User({name: req.params.name});
        user.save(function(err) {
          if(err) {
            console.log('something went wrong');
            console.log(user.errors);
            res.redirect('/')
          } 
          else {
            console.log('successfully added a User!');
            res.redirect('/');
          }
        })
    },
    
    remove: function(req,res){
        User.remove({name: req.params.name}, function(err){
            if(err) {
                console.log('something went wrong');
                console.log(user.errors);
                res.redirect('/')
              } 
              else {
                console.log("RECORD DELETED");
                res.redirect('/');
              }
        })
    },
    disp: function(req,res){
        User.findOne({name: req.params.name}, function(err, user) {
            console.log(user);
            res.json(user);
        })
    },

}