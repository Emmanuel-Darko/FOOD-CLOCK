const Joi =require("joi")

const signupValidator =Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(5).required(),
    role:Joi.string()
})
const loginValidator =Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(5).required()
})

const updateValidator =Joi.object({
    oldPassword:Joi.string().min(5).required(),
    password:Joi.string().min(5).required(),
})


module.exports={
  signupValidator,
  loginValidator,
updateValidator

}