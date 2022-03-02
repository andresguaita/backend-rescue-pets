const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('cities', {
        id:{
            type:  DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{timestamps: false})
};