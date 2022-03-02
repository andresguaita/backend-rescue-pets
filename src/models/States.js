const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('states',{
        id:{
            type:  DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        state: {
            type:  DataTypes.STRING,
            allowNull: false
        },
        
    },{timestamps: false})
};