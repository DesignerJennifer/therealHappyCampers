var Sequelize = require("sequelize");

// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Camper = sequelize.define("camper", {
    id: sequelize.,
    firstname: Sequilize.STRING,
    lastname: Sequelize.STRING,
    email: Sequelize.STRING,
    medicalinfo: Sequelize.BOOLEAN,
    primarykey
});

Camper.sync();

module.exports = camper;