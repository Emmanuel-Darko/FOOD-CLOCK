const Joi =require("joi")

const signupValidator =Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(5).required(),
    role:Joi.string().required()
})
const loginValidator =Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(5).required(),
})

const menuValidator=Joi.object({
    weekMenu:Joi.array().items(Joi.object()).required()
})

module.exports={
  signupValidator,
  loginValidator,
    menuValidator
}