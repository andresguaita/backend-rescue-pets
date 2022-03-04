const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("technicalSupport",
    {
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM("ERROR", "DUDA", "SUGERENCIA"),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isUser:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      status:{
        type: DataTypes.ENUM("PENDIENTE", "SOLUCIONADO"),
        defaultValue: "PENDIENTE"
      },
      comments: {
        type: DataTypes.TEXT,
      }
    }
  );
};