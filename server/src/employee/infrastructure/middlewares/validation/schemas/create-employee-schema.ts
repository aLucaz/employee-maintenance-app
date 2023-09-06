import Joi from "joi";

export default Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  hireDate: Joi.date().iso().required(),
  phone: Joi.string()
    .pattern(new RegExp(/^\+?51\d{9}$/))
    .required(),
  address: Joi.string().required(),
  photo: Joi.string().required(),
});
