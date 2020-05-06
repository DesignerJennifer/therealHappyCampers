var db = require("../../models");

module.exports = function(app) {
    // route to save camp members to database for later usage

    app.put("/api/save/:id", function(req, res) {
        db.User.update(
            {saved: JSON.stringify(req.body)},
            {where: {id: req.params.id} }
        )
        .then(function() {
            res.send("All Set");
        })
        .catch(function(err) {
            res.status(401).json(err);
        });
    });

    // route for getting saved camp members out of database for front end

    app.get("/api/save/:id", function(req, res) {
        db.User.findAll(
            {where: {id: req.params.id} }
        )
        .then(function(data) {
            let parseData = JSON.parse(data [0].saved);
            res.json(parseData);
        })
        .catch(function(err) {
            res.status(401).json(err);
        });
    });
};