import {Sequelize} from "sequelize";
import logger from "../logs/logger.js";

export const sequelize = new Sequelize(`${process.env.DB_DIALECT}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

export const dbInit = () => {
    try {
        sequelize.authenticate();
        logger.info("Connection established successfully.")
    } catch (error) {
        console.log(error);
    }

}

