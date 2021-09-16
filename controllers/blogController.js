var Book = require("../models/blog");

// Blog home page: shows all the blogs saved
exports.blogList = function(req, res) {
    Book.find({}, "title author date content").exec(
        function(error, blog_lists) {
            if (error) {
                console.log("Error in retriving blogs!");
            } else {
                res.render("blog", {blogs: blog_lists});
            }
        }
    );
}

// Shows the details of a specific blog
exports.blogDetail = function(req, res) {}

// Create a new blog
exports.createBlogGet = function(req, res) {}

// Shows the newly created blog
exports.createBlogPost = function(req, res) {}

// Delete a specific blog
exports.deleteBlogGet = function(req, res) {}

// After delete message
exports.deleteBlogPost = function(req, res) {}