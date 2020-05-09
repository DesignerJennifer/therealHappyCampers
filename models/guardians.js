// sequelize (lowercase) references our connection to the DB.
module.exports = function (sequelize, DataTypes) {
    var CamperInfo = sequelize.define('Guardian', 
    {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        phonenumber: INTEGER,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        nickname: DataTypes.STRING,
        birthday: DataTypes.INTEGER,
        grade: DataTypes.INTEGER,
        shirtsize: DataTypes.STRING,
        allergies: DataTypes.STRING,
        dieteryneeds: DataTypes.STRING,
    }
    )
    return Guardian;
}