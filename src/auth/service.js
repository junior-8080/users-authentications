import db from "../../models/index.js";
import Users  from "../../models/users.js";
// import {logger} from "../logs/logger.js";
import { comparePassword, generateToken, verifyToken } from "../utils/utils.js";
const User = Users(db.sequelize,db.Sequelize)

export const userSignin = async (payload) => {
  // validate data.
  // find user .
  // decrypt password and compare.
  //if find user and password => generate token and send.
  // else => send Authorized || User Not Found.
  try {
    let fields = Object.keys(payload);
    let payloadRes = {};
    fields = fields.filter((item) => item === "email" || item === "username");
    let field = fields[0];
    const user = await User.findOne({
      where: { data: { [field]: payload[field] } },
      raw: true,
    });
    if (!user) {
      payloadRes = {
        code: "UNAUTHORIZED",
        message: "Invalid username or password",
      };
      throw payloadRes;
    }
    const isPasswordValid = await comparePassword(
      payload.password,
      user.password
    );
    if (!isPasswordValid) {
      payloadRes = {
        code: "UNAUTHORIZED",
        message: "Invalid username or password",
      };
      throw payloadRes;
    }
    let jwtTokenPayload = {
      userId: user.id,
      username: user.data.username || "",
      email: user.data.email || "",
    };
    const jwtToken = generateToken(jwtTokenPayload);
    delete user.password;
    payloadRes = {
      code: "SUCCESS",
      data: {
        token: jwtToken,
        user,
      },
    };
    return payloadRes;
  } catch (error) {
    throw error;
  }
};

export const verifyUserToken = (payload) => {
  // validate data.
  // verify if token is validate.
  try {
    const result = verifyToken(payload.token);
    const payloadRes = {
      code: "SUCCESS",
      data: {
        isValid: true,
        user: result,
      },
    };
    return payloadRes;
  } catch (error) {
    if (error.message === "invalid signature") {
      let payloadRes = {
        code: "SUCCESS",
        data: {
          isValid: false,
        },
      };
     return payloadRes;
    }
    return  error;
  }
};
