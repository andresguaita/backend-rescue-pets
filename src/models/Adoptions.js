const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('adoptions', {
    answers: {
        type: DataTypes.JSON,
        allowNull:false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    },
    {
        timestamps: false,
    }
    );
};