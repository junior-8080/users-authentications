import jwt from "jsonwebtoken";
import * as api from "./api.js";
import {getAccountDeatils} from "../utils/thirdparties.js";

export const authorize = async (req, res, next) => {
  const token = req.headers['x-api-key'];
  try {
    let verifiedTokenPayload = await getAccountDeatils(token, process.env.JWT_SECRET);
    req.user = verifiedTokenPayload;
    next();
  } catch (error) {
    let payload = {
      code: "UNAUTHORIZED",
      message: "Invalid Token",
    };
    return api.serverErrors(res, payload);
  }
};
