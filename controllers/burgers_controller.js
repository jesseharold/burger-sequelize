// import the model to use the functions
var db = require("../models");

// export for server.js
module.exports = function(app) {

    // ROUTES
    app.get("/", function (request, response) {
        db.Burger.findAll({}).then(function(data) {
            response.render("index", { burgers: data });
        });
    });

    app.post("/", function (request, response) {
        //console.log("creating burger ", request.body.burger_name);
        db.Burger.create({
            burger_name: request.body.burger_name
        }).then(function() {
            response.redirect("/");
        });
    });

    app.put("/:id", function (request, response) {
        //console.log("devouring burger #", request.params.id);
        db.Burger.update({
            where: {
                id: request.params.id
            }, 
            devoured: true
        }).then(function() {
            response.redirect("/");
        });
    });

};