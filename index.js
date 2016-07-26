var express = require("express");
var parser = require("body-parser");
var hbs = require("express-handlebars");
var mongoose = require("./db/connection");

var app = express();

var Message = mongoose.model("Message");

app.use(parser.urlencoded({extended: true}));

app.set("view engine", "hbs");

app.get("/messages", function(req, res){
  Message.find({}).then(function(messages){
    res.render("messages-index", {
      messages: messages
    });
  });
});

app.get("/messages/:name", function(req, res){
  Message.findOne({name: req.params.name}).then(function(message){
    res.render("messages-show", {
      message: message
    });
  });
});

app.post("/messages", function(req, res){
  Message.create(req.body.message).then(function(message){
    res.redirect("/messages/" + message.name)
  })
})


app.listen(4000, function(){
  console.log("It's works!!");
});
