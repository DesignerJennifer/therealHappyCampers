
// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('User', {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        firstName: {
            type: Sequelize.STRING,
            allowNull: true
        },

        lastName: {
            type: Sequelize.STRING,
            allowNull: true
        },

        userName: {
            type: Sequelize.STRING,
            allowNull: true
        },

        password: {
            type: Sequelize.STRING,
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            },
            allowNull: true
        },

        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: true
        },

        address: {
            type: Sequelize.STRING,
            allowNull: true
        },

        city: {
            type: Sequelize.STRING,
            allowNull: true
        },

        state: {
            type: Sequelize.STRING,
            allowNull: true
        },

        zip: {
            type: Sequelize.STRING,
            allowNull: true
        }


    });


    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
        console.log("are we getting passed this?")
    });

    return User;

}
