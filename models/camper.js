var bcrypt = require("bcryptjs");
const Sequelize = require('sequelize')
const db = require('../config/connection')

// sequelize (lowercase) references our connection to the DB.
module.exports = function (sequelize, DataTypes) {
    var campers = sequelize.define('campers', 
    {
        firstname: {
            type: DataTypes.STRING,
        },
        lastname: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        phonenumber:{
            type: DataTypes.INTEGER
        },

        camperfirstname: {
            type: DataTypes.STRING,
        },
        camperlastname: {
            type: DataTypes.STRING,
        },
        nickname: {
            type: DataTypes.STRING,
        },
        birthday: {
           type: DataTypes.INTEGER
        },
        grade: {
            type: DataTypes.INTEGER
        },
        shirtsize: {
            type: DataTypes.STRING,
        },
        allergies: {
            type: DataTypes.STRING,
        },
        dieteryneeds: {
            type: DataTypes.STRING,
        },
    }
    )
    return campers;
}

// module.exports = function(sequelize, DataTypes) {
//     var User = sequelize.define("User", {
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 isEmail: true
//             }
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         saved: {
//             type: DataTypes.TEXT,
//             allowNull: true
//         }
//     });

//     User.prototype.validPassword = function(password) {
//         return bcrypt.compareSync(password, this.password);
//     };

//     User.addHook("beforeCreate", function(user) {
//         user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//     });
//     return User;
// };