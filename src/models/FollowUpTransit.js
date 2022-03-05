const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('followUpTransit',{
        petsAssigned: {
            type:  DataTypes.JSON,
            allowNull: true
        },
        hideTransit : {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
        
    },{timestamps: false})
};