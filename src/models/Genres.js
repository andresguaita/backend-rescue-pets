const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('genres', {
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },{
        timestamps: false,
    });
};

