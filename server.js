
var express = require("express");
//database 
const routes = require("./routes/api-routes");
// Sets up the Express App
// =============================================================
var app = express();
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').config()

// app.use('/', require('./routes/index'));
// app.use('/users', require('./routes/index'))

var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var models = require("./models");

//Routes
var apiRoute = require('./routes/api-routes.js')(app);

//Sync Database
models.sequelize.sync().then(function() {
 
  console.log('Nice! Database looks fine')

}).catch(function(err) {

  console.log(err, "Something went wrong with the Database Update!")

});


// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// // Routes
// user
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
models.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

