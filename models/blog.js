var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BlogSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: String, required: true},
        date: {type: Date, default: Date.now},
        content: {type: String, required: true},
    }
)

BlogSchema.virtual("url").get(
    function() {
        return "/blog/" + this._id;
    }
);

module.exports = mongoose.model("Blog", BlogSchema);