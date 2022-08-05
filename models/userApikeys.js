import { Sequelize, DataTypes } from "sequelize";
import {sequelize} from "../src/utils/dbconnection.js"

export const userApiKeys =
sequelize.define("userApikeys", {
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
});
