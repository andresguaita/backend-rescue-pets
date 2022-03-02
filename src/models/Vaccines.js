const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('vaccines', {
    name: {
        type: DataTypes.STRING,
        allowNull:false
    }
    },
    {
        timestamps: false,
    }
    );
};