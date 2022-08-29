module.exports =  (sequelize, DataTypes) => {
  const userApiKey =  sequelize.define(
    "users_apikeys",
    {
      userId: {
        type: DataTypes.UUID,
        references: {
          model: {
            tableName: "users",
            schema: "schema",
          },
          key: "id",
        },
        allowNull: false,
      },
      apiKey: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return userApiKey;
};

