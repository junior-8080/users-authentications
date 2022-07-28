import { User } from "../../models/users.js";
import { Errors, hashPassword } from "../utils/utils.js";
import { createPersonSchema,updatePersonSchema } from "./schemas.js";

export const createUser = async (payload) => {
  // validate data.
  // find userby api key. compare name and email.=> already exist.
  //encrypt password and save data.
  try {
    const validations = createPersonSchema.validate(payload, {abortEarly: false,});
    let payloadRes = {};
    if (validations.error) {
      let errorData = validations.error;
      payloadRes = {
        data: Errors(errorData),
        code: "INVALID_PARAMS",
      };

      throw payloadRes;
    }
    const users = await User.findAll({ where: { data:{email: payload.data.email,username: payload.data.username}}, raw: true });
    if(users.length > 0) {
      payloadRes = {
        code:'INVALID_PARAMS',
        message:"Email or Username already exist."
      }
      throw(payloadRes);
    }
    const hashedPasword = await hashPassword(payload.password);
    payload.password = hashedPasword;
    payload.status = "A";
    const { dataValues } = await User.create(payload);
    delete dataValues.password;
    payloadRes = {
      code: "SUCCESS",
      data: dataValues,
    };
    return payloadRes;
  } catch (error) {
    return error;
  }
};

export const updateUser = async (payload) => {
  // validate data.
  // find userby api key. compare name and email.=> already exist.
  // update payload.
  try {
    let payloadRes = {};
    const validations = updatePersonSchema.validate(payload, {abortEarly: false,});
     payloadRes = {};
    if (validations.error) {
      let errorData = validations.error;
      payloadRes = {
        data: Errors(errorData),
        code: "INVALID_PARAMS",
      };
      throw payloadRes;
    }
    const users = await User.findAll({ where: { data:{email: payload.data.email,username: payload.data.username}}, raw: true }); 
    let uniqueUsers = users.filter(user => user.id = payload.userId);
    if(uniqueUsers.length === 0) {
      payloadRes = {
        code:'INVALID_PARAMS',
        message:"Email or Username already exist."
      }
      throw(payloadRes);
    }
    let  updatedUser = await User.update({data:payload.data},{where :{id :payload.userId},returning:true,raw:true});
    let updateData = updatedUser[1];

    updateData = updateData[0];
    updatedUser = {
      id: updateData.id,
      data: updateData.data,
      message:"data successfully updated"
    }
    payloadRes = {
      code :"SUCCESS",
      data: updatedUser
    }
    return payloadRes

  } catch (error) {
    return error
  }

};

export const retrieveUsers = (data) => {
  // get query.
  // generate  query.
  // fetch users.
};

export const retrieveUser = (data) => {
  // get query.
  // generate  query.
  // fetch users.
};
