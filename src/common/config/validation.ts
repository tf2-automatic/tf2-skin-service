import * as Joi from 'joi';

const validation = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  PORT: Joi.number().default(3000),
  TYPEORM_SYNCRONIZE: Joi.boolean().default(false),
  POSTGRES_HOST: Joi.string().required(),
  POSTGRES_PORT: Joi.number().required(),
  POSTGRES_USERNAME: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DATABASE: Joi.string().required(),
});

export { validation };
