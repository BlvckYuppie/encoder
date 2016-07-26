var mongoose = require("mongoose");

var messageSchema = new mongoose.Schema(
  {
    name: String,
    body: String
  }
);
mongoose.model("Message", messageSchema);
mongoose.connect("mongodb://localhost/encoder");

module.exports = mongoose;
