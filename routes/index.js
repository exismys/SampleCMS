const express = require('express');
const router = express.Router();
const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Importing controllers
const blogController = require("../controllers/blogController");
const projectController = require("../controllers/projectController");

// Get home page: Main
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Exismys' });
});

// Register
router.get('/register/', (req, res) => {
  res.render('register');
});

router.post('/register/', async (req, res) => {
  const {username, password} = req.body;
  const rounds = 10;
  let hashedPassword = await bcrypt.hash(password, rounds);

  try {
    const result = await User.create({username, password: hashedPassword});
    console.log("User created: " + result);
    res.send("You are registered.");
  } catch (error) {
    res.send('Some error occured!');
  }

});

// Login
router.get('/login/', (req, res) => {
  res.render('login');
});

router.post('/login/', async (req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({username});
  if (!user) {
    return res.send('user does not exist!');
  }

  bcrypt.compare(password, user.password, function(err, matched) {
    if (err) {
      console.log(error);
    } 
    if (matched) {
      console.log('password matched');
      const token = jwt.sign({id: user._id, username: user.username}, process.env.jwt_secret);
      return res.json({status: 'ok', data: token});
    } else {
      console.log('Password did not match!');
      return res.json({status: 'error', error: 'Incorrect password'});
    }
  });

});

// Route to check if the user has authorization
router.get('/checkAuth/', (req, res) => {
  res.render('checkAuth');
});

router.post('/checkAuth/', (req, res) => {
  const token = req.body.token;
  try {
    const userData = jwt.verify(token, process.env.jwt_secret);
    console.log('User Decoded: ', userData);
    res.json({status: 'ok'});
  } catch (error) {
    console.log('jwt verify error');
    res.json({status: 'error', error: "Couldn't verify user"});
  }

})

// Project routes
router.get('/projects/', projectController.projectList);
router.get('/project/:id', projectController.projectDetail);
router.get('/projects/add', projectController.createProjectGet);
router.post('/projects/add', projectController.createProjectPost);
router.get('/project/:id/delete', projectController.deleteProjectGet);
router.post('/project/:id/delete', projectController.deleteProjectPost);

// Blog routes
router.get('/blog/', blogController.blogList);
router.get('/blog/create/', blogController.createBlogGet);
router.post('/blog/create/', blogController.createBlogPost);
router.get('/blog/:id', blogController.blogDetail);
router.get('/blog/:id/delete', blogController.deleteBlogGet);
router.post('/blog/:id/delete', blogController.deleteBlogPost);

module.exports = router;