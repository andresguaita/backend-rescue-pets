const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('followUpTransit',{
        petsAssigned: {
            type:  DataTypes.JSON,
            allowNull: true
        },
        
    },{timestamps: false})
};