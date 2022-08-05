import * as api from "../utils/api.js";
import {createUser,updateUser } from "./services.js";

export const saveUser = (req, res) => {
  const data = req.body;
  createUser(data)
    .then((response) => api.success(res, response))
    .catch((err) => {
      return api.serverErrors(res, err);
    });
};

export const editUserDetails = (req, res) => {
  const data = req.body;
  updateUser(data)
    .then((response) => api.success(res, response))
    .catch((err) => {
      return api.serverErrors(res, err);
    });
};

export const fetchUsers = (req, res) => {};

export const fetchUser = (req, res) => {};
