const router = require("express").Router();
const userController = require('../controller/user_controller');
var authController = require('../controller/authcontroller.js');


module.exports = function(app) {
 
  app.get('/', authController.signup);

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

}