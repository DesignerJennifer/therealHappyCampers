var bcrypt = require("bcryptjs");

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

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
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

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
};