var bcrypt = require("bcryptjs");
const Sequelize = require('sequelize')
const db = require('../config/connection')

<<<<<<< Updated upstream
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            validate: {
              isAlpha: true
            }
          },
      
          lastName: {
            type: DataTypes.STRING,
            validate: {
              isAlpha: true
            }
        },

=======
// sequelize (lowercase) references our connection to the DB.
module.exports = function (sequelize, DataTypes) {
    var userInfo = sequelize.define('userinfo', 
    {
        firstname: {
            type: DataTypes.STRING,
        },
        lastname: {
            type: DataTypes.STRING,
        },
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        saved: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        phonenumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        camperfirstname:  {
        type: DataTypes.STRING,
        allowNull: false,
        },
        camperlastname: {
            type: DataTypes.STRING,
            allowNull: false,
            },

        nickname: {
            type: DataTypes.STRING,
            allowNull: true,
            },
        
        shirtsize: {
            type: DataTypes.STRING,
            allowNull: true,
            },

        allergies: {
            type: DataTypes.STRING,
            allowNull: true,
            },
        dieteryneeds: {
            type: DataTypes.STRING,
            allowNull: true,
            },
        birthday: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        grade: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },


    });
=======
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
    return userInfo;
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
>>>>>>> Stashed changes

//     User.prototype.validPassword = function(password) {
//         return bcrypt.compareSync(password, this.password);
//     };

//     User.addHook("beforeCreate", function(user) {
//         user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//     });
//     return User;
// };