var db = require('../models')

// exports.signUp = function(req, res) {
//     res.render('signup.ejs');
// }

// exports.register = function(req, res) {
//     db.User.find({where: {username: req.username}}).success(function (user){
//         if(!user) {
//             db.User.create({username: req.body.username, password: req.body.password}).error(function(err){
//                 console.log(err)
//             })
//         }
//         else {
//             res.redirect('/signup')
//         }
//     })
//     res.redirect('/')
// };
module.exports = function(app) {
    app.get("/api/users", function(req, res) {
      db.User.findAll({
        include: [db.Post]
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
    app.get("/api/users/:id", function(req, res) {
      db.User.findOne({
        where: {
          id: req.params.id
        },
        include: [db.Post]
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
    app.post("/api/users", function(req, res) {
      db.User.create(req.body).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
    app.delete("/api/users/:id", function(req, res) {
      db.User.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
  };