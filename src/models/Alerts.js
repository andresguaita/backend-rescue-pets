const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('alerts', {
        direction: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }


    }, { timestamps: false })
};
