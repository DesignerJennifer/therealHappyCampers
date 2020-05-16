const router = require("express").Router();
const userController = require('../controller/user_controller');
var authController = require('../controller/authcontroller.js');
var db = require('../models')
var passport = require('../config/passport')
var isAuthenticated = require('../config/middleware/isAuthenticated')

// get - to get a resource
// post  - to create a resource
// update - to update an existing resource
// delete - to delete a resource

module.exports = function() {
  router.route('/health')
    .get((req, res) => {
      res.json({status: 'ok'})
    })

  }
  //   db.User.update(data, where)
  //     .then(function () {
  //       res.redirect('/api/members')
  //     })
  //     .catch(function (err) {
  //       console.error(JSON.stringify(err), data, where)
  //       console.trace()
  //       res.status(401).json(err)
  //     })
  // }

  // app.get('/api/members', isAuthenticated, function (req, res) {
  //   res.json({
  //     email: req.user.email,
  //     firstName: req.user.firstName,
  //     lastName: req.user.lastName,
  //     id: req.user.id
  //   })
  // })

  // app.post('/api/login', passport.authenticate('local'), function (req, res) {
  //   // Sending back a password, even a hashed password, isn't a good idea
  //   res.json({
  //     email: req.user.email,
  //     id: req.user.id
  //   })
  // })

  // // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // // otherwise send back an error
  // app.post('/api/signup', function (req, res) {
  //   db.User.create({
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     email: req.body.email,
  //     password: req.body.password
  //   })
  //     .then(function () {
  //       res.redirect(307, '/api/login')
  //     })
  //     .catch(function (err) {
  //       res.status(401).json(err)
  //     })
  // })

  // // Route for logging user out
  // app.get('/logout', function (req, res) {
  //   req.logout()
  //   res.redirect('/')
  // })

  // // Route for getting some data about our user to be used client side
  // app.get('/api/user_data', isAuthenticated, function (req, res) {
  //   db.User.findAll({
  //     where: {
  //       id: req.user.id
  //     }
  //   }).then(data => {
  //     res.json(data[0])
  //   })
  // })

  // // app.get('/api/signup', authController.signup);

  return router










// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(userController.findById)



//CRUD Opperations


// var User = require("../../models/User");
// // Routes
// // =============================================================
// module.exports = function(app) {

  // Get all users
//   app.get("/api/all", function(req, res) {
//     // Finding all Chirps, and then returning them to the user as JSON.
//     User.findAll({})
//     .then(function(results) {
//       // results are available to us inside the .then
//       res.json(results);
//     });

//   });

// // Get route for returning posts of a specific user
// app.get("/api/campers/fullname/:fullname", function(req, res) {
//   User.Userinfo.findAll({
//     where: {
//       firstname: req.params.firstname
//     }
//   })
//     .then(function(dbPost) {
//       res.json(dbPost);
//     });
// });


//  // Get route for retrieving a single user
//  app.get("/api/user/:id", function(req, res) {
//   User.Userinfo.findOne({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(function(dbUser) {
//       res.json(dbUser);
//     });
// });

//   // Add a user
//   app.post("/api/new", function(req, res) {

//     console.log("User Data:");
//     console.log(req.body);

//     User.create({
//       author: req.body.author,
//       body: req.body.body,
//       created_at: req.body.created_at
//     }).then(function(results) {
//       res.end();
//     });

//   });

//     // DELETE route for deleting posts
//     app.delete("/api/posts/:id", function(req, res) {
//       db.Post.destroy({
//         where: {
//           id: req.params.id
//         }
//       })
//         .then(function(dbPost) {
//           res.json(dbPost);
//         });
//     });
  
//     // PUT route for updating posts
//     app.put("/api/posts", function(req, res) {
//       db.Post.update(req.body,
//         {
//           where: {
//             id: req.body.id
//           }
//         })
//         .then(function(dbPost) {
//           res.json(dbPost);
//         });
//     });
