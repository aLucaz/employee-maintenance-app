import Joi from "joi";

export default Joi.object({
  id: Joi.number().integer().required(),
});
