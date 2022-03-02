const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('petStatus', {
    status: {
        type: DataTypes.TEXT,
        allowNull:false
    }
    },
    {
        timestamps: false,
    }
    );
};