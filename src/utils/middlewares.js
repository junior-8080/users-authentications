import jwt from "jsonwebtoken";
import * as api from "./api.js";
import { getAccountDeatils } from "../utils/thirdparties.js";

export const authorize = async (req, res, next) => {
  try {
    let apiKey = req.headers["x-api-key"];
  
    if (apiKey === null || apiKey === undefined)
      throw new Error("UNAUTHORIZED");
    let verifiedTokenPayload = await getAccountDeatils(apiKey);
    console.log(verifiedTokenPayload)
    if(verifiedTokenPayload.statusCode === 404) throw new Error('UNAUTHORIZED')
    req.user = verifiedTokenPayload.data;
    req.user.key = apiKey;
    next();
  } catch (error) {
    console.log(error)
    let payload = {
      code: "UNAUTHORIZED",
      message: "Invalid Token",
    };
    return api.serverErrors(res, payload);
  }
};
