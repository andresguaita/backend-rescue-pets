const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('formtype', {
    typeName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    },
    {
        timestamps: false,
    }
    );
};
