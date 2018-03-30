var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    app.get("/api/threads", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Thread.findAll({
          include: [db.Post]
        }).then(function(dbThread) {
          res.json(dbThread);
        });
      });
    
      app.get("/api/threads/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Thread.findOne({
          where: {
            id: req.params.id
          },
          include: [db.Post]
        }).then(function(dbThread) {
          res.json(dbThread);
        });
      }); 
      app.get("/api/threads/title/:title", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Thread.findOne({
          where: {
            title: req.params.title
          },
          include: [db.Post]
        }).then(function(dbThread) {
          res.json(dbThread);
        });
      });
      app.post("/api/threads", function(req, res) {
        db.Thread.create(req.body).then(function(dbThread) {
          res.json(dbThread);
        });
      });
    
      app.delete("/api/threads/:id", function(req, res) {
        db.Thread.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbThread) {
          res.json(dbThread);
        });
      });
};