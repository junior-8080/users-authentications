import { serverErrors, success } from "../utils/api.js";
import { userSignin, verifyUserToken } from "./service.js";

export const authentication = (req, res) => {
  const { query, body } = req;
  let data = body;
  switch (query.type) {
    case "login":
      userSignin(data)
        .then((payload) => {
          success(res,payload);
        })
        .catch((error) => {serverErrors(res,error)});
      break;
    default:
     const response =  verifyUserToken(data);
     success(res,response)
  }
};
