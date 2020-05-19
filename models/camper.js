module.exports = function (sequelize, Sequelize) {

    var CamperReg = sequelize.define('Camper', {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        //These feilds will be same name as sign in to make a common field for table joining
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
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