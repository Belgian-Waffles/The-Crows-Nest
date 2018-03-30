var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    app.get("/api/forums", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Thread
        db.Forum.findAll({
          include: [db.Thread]
        }).then(function(dbForum) {
          res.json(dbForum);
        });
      });
    
      app.get("/api/forums/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Thread
        db.Forum.findOne({
          where: {
            id: req.params.id
          },
          include: [db.Thread]
        }).then(function(dbForum) {
          res.json(dbForum);
        });
      });
    
      app.post("/api/forums", function(req, res) {
        db.Forum.create(req.body).then(function(dbForum) {
          res.json(dbForum);
        });
      });
    
      app.delete("/api/forums/:id", function(req, res) {
        db.Forum.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbForum) {
          res.json(dbForum);
        });
      });
};