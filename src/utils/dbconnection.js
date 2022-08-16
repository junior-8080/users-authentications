import { Sequelize } from "sequelize";
// import {logger} from "../logs/logger.js";

export const sequelize = new Sequelize({
    database:process.env.DB_NAME ,
    username:process.env.DB_USER ,
    password:process.env.DB_PASSWORD ,
    host:process.env.DB_HOST ,
    port: process.env.DB_PORT,
    dialect:process.env.DB_DIALECT,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      },
    },
});


export const dbInit = () => {
  try {
    sequelize.authenticate();
   console.log("Connection established successfully.");
  } catch (error) {
    console.log(error);
  }
};
