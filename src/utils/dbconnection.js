import {Sequelize} from "sequelize";
import logger from "../logs/logger.js";

export const dbInit = () => {
    const sequelize = new Sequelize('postgres://postgres:qwerty123@localhost:5432/users-authentication');
    try {
        sequelize.authenticate();
        logger.info("Connection established successfully.")
    } catch (error) {
        console.log(error);
    }

}

