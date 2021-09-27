var Blog = require("../models/blog");

// Blog home page: shows all the blogs saved
exports.blogList = function(req, res) {
    Blog.find({}, "title author date content").exec(
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
exports.blogDetail = function(req, res) {
    Blog.findById(req.params.id).exec(
        function(error, blog) {
            if (error) {
                console.log(`Error in retrieving book: ${req.params.id}`);
            } else {
                res.render("blogDetail", {blog: blog});
            }
        }
    )
}

// Create a new blog
exports.createBlogGet = function(req, res) {
    res.render("createBlog");
}

// Shows the newly created blog
exports.createBlogPost = function(req, res) {
    console.log(req);
    res.send("hello world")
}

// Delete a specific blog
exports.deleteBlogGet = function(req, res) {}

// After delete message
exports.deleteBlogPost = function(req, res) {}