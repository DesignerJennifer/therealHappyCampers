module.exports = function (app) {
    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            res.json({})
        } else {
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
}