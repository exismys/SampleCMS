var express = require('express');
var router = express.Router();

// Importing controllers
var blogController = require("../controllers/blogController");
var projectController = require("../controllers/projectController");

// Get home page: Main
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Exismys' });
});

// Project routes
router.get('/projects/', projectController.projectList);

// Blog routes
router.get('/blog/', blogController.blogList);

module.exports = router;