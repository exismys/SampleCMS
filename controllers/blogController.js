
// Blog home page: shows all the blogs saved
exports.blogList = function(req, res) {
    res.render('blog');
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