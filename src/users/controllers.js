import * as api from "../utils/api.js";
import { createUser, updateUser, retrieveUsers } from "./services.js";

export const saveUser = (req, res) => {
  const data = req.body;
 data.apiKey = req.user.key;  
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

export const fetchUsers = (req, res) => {
  const data = {
    key: req.user.key
  }
  retrieveUsers(data)
    .then((response) => api.success(res, response))
    .catch((err) => api.serverErrors(res, err));
};
