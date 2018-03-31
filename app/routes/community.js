var db = require("../models");
// var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
    app.get("/api/communities", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Forum
        db.Community.findAll({
          include: [db.Forum]
        }).then(function(dbCommunity) {
          res.json(dbCommunity);
        });
      });
    
      app.get("/api/communities/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Forum
        db.Community.findOne({
          where: {
            id: req.params.id
          },
          include: [db.Forum]
        }).then(function(dbCommunity) {
          res.json(dbCommunity);
        });
      });
      app.get("/api/communities/title/:title", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Forum
        console.log("api:"+req.params.title);
        db.Community.findOne({
          where: {
            title: req.params.title
          },
          include: [db.Forum]
        }).then(function(dbCommunity) {
          res.json(dbCommunity);
        });
      });
      app.post("/api/communities", function(req, res) {
        db.Community.create(req.body).then(function(dbCommunity) {
          res.json(dbCommunity);
        });
      });
    
      app.delete("/api/communities/:id", function(req, res) {
        db.Community.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbCommunity) {
          res.json(dbCommunity);
        });
      });
};