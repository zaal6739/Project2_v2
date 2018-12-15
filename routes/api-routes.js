// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

 
  app.get("api/track/:username", function(req, res) {
    db.weighttracking.findAll({ where: {
      username: req.params.username
    }
  })
      .then(function(dbLogin) {
        res.json(dbLogin);
      });
  });

  // app.get("/api/dashboard/", function(req, res) {
  //   db.weighttracking.findAll({})
  //     .then(function(dbLogin) {
  //       res.json(dbLogin);
  //     });
  // });


  app.get("/api/login/:username", function(req, res) {
    db.userlogin.findOne({ 
      where: {
        username: req.params.username
      }
    })
      .then(function(dbLogin) {
        res.json(dbLogin);
      });
  });

};
