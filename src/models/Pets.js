const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('pets', {
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    sterilization: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    }
    ,
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    }
    );
};