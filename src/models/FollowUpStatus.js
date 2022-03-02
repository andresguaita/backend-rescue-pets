const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('followUpStatus',{
        followUpStatus: {
            type:  DataTypes.STRING,
            allowNull: false
        },
        
    },{timestamps: false})
};