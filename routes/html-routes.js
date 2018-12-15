let path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mainPage.html"));
    // res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // cms route loads cms.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // blog route loads blog.html
  app.get("/createuser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createUser.html"));
  });

  // authors route loads author-manager.html
  app.get("/register/:uniqueId", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/registration.html"));
  });

  app.get("/dashboard/:uniqueId", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dashBoard.html"));
  });

  app.get("/track/:uniqueId", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dashBoard.html"));
  });
};
