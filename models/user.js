<<<<<<< HEAD
module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('Users', {
 
=======
module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('user', {

>>>>>>> 77c9b85e07a06e22f76f8f9ade0fc8bd7d4d2eb8
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false
        },

        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },

        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
<<<<<<< HEAD
 
        username: {
            type: Sequelize.STRING,
        },
 
        about: {
            type: Sequelize.STRING,
=======

        userName: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
>>>>>>> 77c9b85e07a06e22f76f8f9ade0fc8bd7d4d2eb8
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            },
            allowNull: false
        },

        phoneNumber: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        address: {
            type: Sequelize.STRING,
            allowNull: false
        },

        city: {
            type: Sequelize.STRING,
            allowNull: false
        },

        state: {
            type: Sequelize.STRING,
            allowNull: false
        },

        zip: {
            type: Sequelize.INTEGER,
            allowNull: false
        }


    });

    return User;

}