var Sequelize = require("sequelize");

// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Guardian = sequelize.define("guardian", {
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: Sequelize.STRING,
    medicalinfo: Sequelize.BOOLEAN,
});

Guardian.sync();

module.exports = Guardian;