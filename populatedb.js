var mongoose = require('mongoose');
var Blog = require("./models/blog");

require("dotenv").config();

var mongoDB = process.env.mongodb
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {console.log("database connected");
populate();})
.catch(err => console.log(err));

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var createBlog = function(title, author, content) {
    const blogData = {
        title: title,
        author: author,
        content: content,
    }

    var blog = new Blog(blogData);

    blog.save(function(err) {
        if (err) {
            console.log("There's been an error in creating blog!" + err);
        } else {
            console.log("Blog created: " + blog);
        }
    });
}

var populate = function() {
    for (let i = 0; i < 15; i++) {
        createBlog(`Reflection in the water $i`, "exismys", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi similique esse debitis labore aspernatur doloremque! Sequi, praesentium! Repudiandae, facilis? Provident, eligendi nam ea ipsam deserunt rerum sapiente? Tenetur, voluptatum aut.");
    }
}
