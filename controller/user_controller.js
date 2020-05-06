var express = require("express");
var router = express.Router();

var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function(req, res) {
    res.render("index")
});

router.get("/login", function(req, res) {
    if (req.user) {
        res.redirect("/members", isAuthenticated, function(req, res) {
            res.render("members", {
                userId: req.user.id
            });
        });


    }
});

module.exports = router;