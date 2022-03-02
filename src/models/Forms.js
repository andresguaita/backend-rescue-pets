const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('forms', {
    formName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    },
    {
        timestamps: false,
    }
    );
};