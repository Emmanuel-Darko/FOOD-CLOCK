const express = require("express")
const routes =express.Router()
const {createUser,getUser,updateUser}= require("../controller/authController")

routes.post("/login",getUser)
routes.post("/signup",createUser)
routes.put("/user/:uuid",updateUser)

module.exports = routes