import db from "../../models";


export const dbInit = () => {
  try {
    db.sequelize.authenticate()
   console.log("Connection established successfully.");
  } catch (error) {
    console.log(error);
  }
};
