import Joi from "joi";

export default Joi.object({
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  hireDate: Joi.date().iso().optional(),
  phone: Joi.string()
    .pattern(new RegExp(/^\+?51\d{9}$/))
    .optional(),
  address: Joi.string().optional(),
  photo: Joi.string().optional(),
  isActive: Joi.boolean().optional(),
});
