var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });



  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body)
    db.User.create(req.body)
      .then(function (data) {
        res.json(data)
        // res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

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
};






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