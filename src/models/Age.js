const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('age', {
        age: {
            type: DataTypes.STRING,
            allowNull: false
        },
        range: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });
};