const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('permission',{
        permission:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
};