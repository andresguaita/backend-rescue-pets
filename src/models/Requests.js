const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('requests', {
    answers: {
        type: DataTypes.JSON,
        allowNull:false
    },
    },
    {
        timestamps: false,
    }
    );
};