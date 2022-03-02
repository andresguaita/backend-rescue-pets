const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('followUp',{
        followUpDate1: {
            type:  DataTypes.DATE,
            allowNull: true
        },
        followUpDate2: {
            type:  DataTypes.DATE,
            allowNull: true
        },
        followUpDate3: {
            type:  DataTypes.DATE,
            allowNull: true
        },
        
    },{timestamps: false})
};