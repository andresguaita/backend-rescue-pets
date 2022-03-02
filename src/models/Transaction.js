const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "transaction",
    {
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      state: {
        type: DataTypes.ENUM("APROBADO", "PENDIENTE", "RECHAZADO"),
        allowNull: false,
      },
      
    }
  );
};