import Joi, { string } from "joi";

export const CreateUserSchema = {
  body: Joi.object({
    user: Joi.object({
      type: Joi.string().required().valid("CLIENT", "DELIVERYMAN"),
      description: Joi.string(),
      full_name: Joi.string(),
      document: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }).required(),
    adresses: Joi.array().items(Joi.object({
      street: Joi.string(),
      district: Joi.string(),
      number: Joi.string(),
      city: Joi.string(),
      state: Joi.string()
    }))
  }),
};

export const LoginSchema = {
  body: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  })
}

export const DeliverySchema = {
  body: Joi.object({
	item_name: Joi.string().required(),
  description: Joi.string(),
  street: Joi.string(),
  district: Joi.string(),
  number: Joi.number(),
  city: Joi.string(),
  state: Joi.string(),
  complement:Joi.string(),
  created_by: Joi.string().required()
  })
}