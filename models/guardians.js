// sequelize (lowercase) references our connection to the DB.
module.exports = function (sequelize, DataTypes) {
    var Guardian = sequelize.define('Guardian', 
    {
        firstnam: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        medicalinfo: DataTypes.BOOLEAN,
    }
    )
    return Guardian;
}