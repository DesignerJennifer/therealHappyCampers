<<<<<<< Updated upstream

// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
const routes = require("./routes");
// Sets up the Express App
// =============================================================
var app = express();
=======
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
var express = require("express");
//database 
const routes = require("./routes/api-routes");
// Sets up the Express App
// =============================================================
var app = express();
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/index'))

>>>>>>> Stashed changes
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// // Routes
<<<<<<< Updated upstream
app.use(routes);
=======
// user
app.use(routes);
// app.use(routes);
>>>>>>> Stashed changes
// // =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

