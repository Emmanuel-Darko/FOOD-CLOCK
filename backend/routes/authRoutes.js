const express = require("express")
const routes =express.Router()
const {createUser,getUser,updateUser}= require("../controller/authController")
const validateToken =require("../middleware/tokenValidator")

routes.post("/login",getUser)
routes.post("/signup",createUser)
routes.put("/user/:uuid",validateToken,updateUser)

module.exports = routes