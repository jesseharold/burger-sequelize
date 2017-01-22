var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 7070;

// Requiring our models for syncing
var db = require("./models");

// Parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//set a static folder
app.use(express.static('public'));

// handlebars boilerplate
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./controllers/burgers_controller.js")(app);

// sync the data model to the database before starting app
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("app is listening on port ", PORT);
    });
});