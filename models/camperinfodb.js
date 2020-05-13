// sequelize (lowercase) references our connection to the DB.
module.exports = function (sequelize, DataTypes) {
    var CamperInfo = sequelize.define('Camperinfo', 
    {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        phonenumber: INTEGER,
        camperfirstname: DataTypes.STRING,
        camperlastname: DataTypes.STRING,
        nickname: DataTypes.STRING,
        birthday: DataTypes.INTEGER,
        grade: DataTypes.INTEGER,
        shirtsize: DataTypes.STRING,
        allergies: DataTypes.STRING,
        dieteryneeds: DataTypes.STRING,
    }
    )
    return CamperInfo;
}