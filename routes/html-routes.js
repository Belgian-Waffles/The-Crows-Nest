var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // add code to send the view.html file
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home2.html"));
  });

  app.get("/community", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/community.html"));
  });

  app.get("/community/:community_id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/community.html"));
  });

};