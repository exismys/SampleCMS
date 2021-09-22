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
router.get('/project/:id', projectController.projectDetail);
router.get('/projects/add', projectController.createProjectGet);
router.post('/projects/add', projectController.createProjectPost);
router.get('/project/:id/delete', projectController.deleteProjectGet);
router.post('/project/:id/delete', projectController.deleteProjectPost);

// Blog routes
router.get('/blog/', blogController.blogList);
router.get('/blog/create', blogController.createBlogGet);
router.post('/blog/create', blogController.createBlogPost);
router.get('/blog/:id', blogController.blogDetail);
router.get('/blog/:id/delete', blogController.deleteBlogGet);
router.post('/blog/:id/delete', blogController.deleteBlogPost);

module.exports = router;