module.exports = function (sequelize, Sequelize) {

    var CamperReg = sequelize.define('Camper', {

        //These feilds will be same name as sign in to make a common field for table joining
        firstName: {
            type: Sequelize.STRING,
            allowNull: true
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: true
        },

        camperFirstName: {
            type: Sequelize.STRING,
            allowNull: true
        },

        camperFirstName: {
            type: Sequelize.STRING,
            allowNull: true
        },

        nickname: {
            type: Sequelize.STRING,
            allowNull: true
        },

        birthday: {
            type: Sequelize.STRING,
            allowNull: true
        },

        grade: {
            type: Sequelize.STRING,
            allowNull: true
        },

        shirtsize: {
            type: Sequelize.STRING,
            allowNull: true
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