import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const saltRound = 10;

export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt
      .hash(password, saltRound)
      .then((result) => {
        if (result) {
          resolve(result);
        }
      })
      .catch((err) => reject(err));
  });
};

export const comparePassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt
      .compare(password, hash)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

export const generateToken = (payload) => {
  let token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};
export const verifyToken = (token) => {
  const payload = jwt.verify(token,process.env.JWT_SECRET);
  return payload
};

export const Errors = (errorData) =>
  errorData.details.map((detail) => {
    return {
      field: detail.context.label,
      message: detail.message,
      value: detail.context.value,
    };
  });
