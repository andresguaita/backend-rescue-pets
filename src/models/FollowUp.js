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
        hideFollowUp: {
            type:  DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        
    },{timestamps: false})
};