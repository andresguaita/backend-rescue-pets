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
            type: DataTypes.STRING(1000),
            allowNull: false,
        }


    }, { timestamps: false })
};
