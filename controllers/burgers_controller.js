// import the model to use the functions
var db = require("../models");
var moment = require("moment");

// export for server.js
module.exports = function(app) {

    // ROUTES
    app.get("/", function (request, response) {
        response.render("index");
    });

    app.get("/burgers", function (request, response) {
        db.Burger.findAll({
            order: [['burger_name', 'ASC']]
        }).then(function(data) {
            response.render("burgers", {burgers: data});
        });
    });

    app.post("/burgers", function (request, response) {
        //console.log("creating burger ", request.body.burger_name);
        db.Burger.create({
            burger_name: request.body.burger_name,
            createdBy: request.body.userID
        }).then(function() {
            response.redirect("/burgers/");
        });
    });

    app.put("/burgers/eat/:id/:user", function (request, response) {
        console.log(request.params.user + " devouring burger #", request.params.id);
        db.Burger.update({
            devoured: 1,
            devouredBy: request.params.user
        }, {
            where: {
                id: request.params.id
            }
        }).then(function(data) {
            response.json(data);
        });
    });

};