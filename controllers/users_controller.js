// import the model to use the functions
var db = require("../models");

// export for server.js
module.exports = function(app) {

    // ROUTES
    app.get("/api/users", function (request, response) {
        db.Customer
        .findAll({})
        .then(function(data) {
            response.json(data);
        });
    });

    app.post("/user", function (request, response) {
        //console.log("creating user ", request.body.user_name);
        db.Customer
        .create({
            name: request.body.user_name
        })
        .then(function(data) {
            response.json(data);
        });
    });

};