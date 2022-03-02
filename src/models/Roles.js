const {DataTypes}=require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('roles', {
     role: {
      type: DataTypes.STRING,
      allowNull: false
  },
  },
  {
    timestamps: false,
  });
};
