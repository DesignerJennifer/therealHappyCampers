const router = require("express").Router();
const userController = require('../controller/user_controller');
var authController = require('../controller/authcontroller.js');

// get - to get a resource
// post  - to create a resource
// update - to update an existing resource
// delete - to delete a resource

module.exports = function() {
  router.route('/health')
    .get((req, res) => {
      res.json({status: 'ok'})
    })

  // app.get('/api/signup', authController.signup);

  return router
}

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
