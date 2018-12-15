// Requiring our models
let db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/goals", function(req, res) {
    let query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbGoal) {
      res.json(dbGoal);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/goals/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Goal.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbGoal) {
      res.json(dbGoal);
    });
  });

  // POST route for saving a new post
  app.post("/api/goals", function(req, res) {
    db.Goal.create(req.body).then(function(dbGoal) {
      res.json(dbGoal);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/goals/:id", function(req, res) {
    db.Goal.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGoal) {
      res.json(dbGoal);
    });
  });

  // PUT route for updating posts
  app.put("/api/goals", function(req, res) {
    db.Goal.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbGoal) {
      res.json(dbGoal);
    });
  });
};
