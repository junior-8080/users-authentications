module.exports =  (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
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
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      apiKey:{
        type:DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
    }
  );
  return User;
};

