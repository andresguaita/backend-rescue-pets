const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('countries',{
        id:{
            type:  DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        country: {
            type:  DataTypes.STRING,
            allowNull: false
        },
        flag: {
            type:  DataTypes.STRING,
            allowNull: false
        },
        
    },{timestamps: false})
};