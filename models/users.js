const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize();

const User = sequelize.define("User",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    data: {
      type: DataTypes.JSON,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.CHAR,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }
);
