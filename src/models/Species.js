const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('species', {
    specie: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
    {
      timestamps: false,
    }
  );
};