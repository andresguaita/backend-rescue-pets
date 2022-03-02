const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('questions', {
    question: {
        type: DataTypes.TEXT,
        allowNull:false
    }
    },
    {
        timestamps: false,
    }
    );
};
