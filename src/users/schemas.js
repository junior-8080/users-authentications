import Joi from "joi";

export const createPersonSchema = Joi.object({
  password: Joi.string().required(),
  apiKey: Joi.string().optional(),
  data: Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    phonenumber: Joi.string().optional(),
    profileImgUrl: Joi.string().optional(),
    gender: Joi.string().optional(),
    age: Joi.number().min(0),
  }),
});

export const updatePersonSchema = Joi.object({
  data: Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    phonenumber: Joi.string().optional(),
    profileImgUrl: Joi.string().optional(),
    gender: Joi.string().optional(),
    age: Joi.number().min(0),
  }),
  userId: Joi.string().uuid().required(),
});
