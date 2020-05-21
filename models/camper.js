module.exports = function (sequelize, Sequelize) {

    var CamperReg = sequelize.define('Camper', {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        camperFirstName: {
            type: Sequelize.STRING,
            allowNull: false
        },

        camperLastName: {
            type: Sequelize.STRING,
            allowNull: false
        },

        nickname: {
            type: Sequelize.STRING,
            allowNull: false
        },

        birthday: {
            type: Sequelize.STRING,
            allowNull: false
        },

        grade: {
            type: Sequelize.STRING,
            allowNull: false
        },

        shirtsize: {
            type: Sequelize.STRING,
            allowNull: false
        },

        allergies: {
            type: Sequelize.STRING,
            allowNull: true
        },

        dietaryNeeds: {
            type: Sequelize.STRING,
            allowNull: true
        }


    });

    return CamperReg;

}