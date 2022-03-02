const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('profiles', {
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
    },
    {
        timestamps: false,
    }
    );
};