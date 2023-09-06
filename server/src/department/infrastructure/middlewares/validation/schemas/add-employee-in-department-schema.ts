import Joi from "joi";

export default Joi.object({
  idEmployee: Joi.number().integer().required(),
  idDepartment: Joi.number().integer().required(),
});
