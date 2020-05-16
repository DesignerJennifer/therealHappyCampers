module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('user', {

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

        userName: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
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