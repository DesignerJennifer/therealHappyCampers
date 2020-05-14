const router = require("express").Router();
const userController = require("../../controller/user_controller");


// login page
router.get('/login', (req, res) => res.send('Login'));

// Register page
router.get('/register', (req, res) => res.send('Register'));


// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(userController.findById)

module.exports = router;




//CRUD Opperations


// var User = require("../../models/User");
// // Routes
// // =============================================================
// module.exports = function(app) {

//   // Get all users
//   app.get("/api/all", function(req, res) {
//     // Finding all Chirps, and then returning them to the user as JSON.
//     User.findAll({})
//     .then(function(results) {
//       // results are available to us inside the .then
//       res.json(results);
//     });

//   });

// // // Get route for returning posts of a specific user
// // app.get("/api/campers/fullname/:fullname", function(req, res) {
// //   User.Userinfo.findAll({
// //     where: {
// //       firstname: req.params.firstname
// //     }
// //   })
// //     .then(function(dbPost) {
// //       res.json(dbPost);
// //     });
// // });


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

// };