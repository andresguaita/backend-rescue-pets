const { DataTypes, Sequelize }= require('sequelize');

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
        type: DataTypes.ARRAY(Sequelize.TEXT),
        allowNull: false,
    },
    hideFromDash: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    inTransit: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    }
    );
};