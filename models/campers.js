

// sequelize (lowercase) references our connection to the DB.
module.exports = function (sequelize, DataTypes) {
    var Camper = sequelize.define('Camper', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        guardian: DataTypes.STRING,
        age: DataTypes.INTEGER,
        grade: DataTypes.INTEGER,
        shirtsize: DataTypes.STRING,
        allergies: DataTypes.STRING,
        meication: DataTypes.STRING,
        dieteryneeds: DataTypes.STRING,
        iep: DataTypes.BOOLEAN,
    
    })
    return Camper
}

