const express = require("express")
const routes =express.Router()
const {createUser,getUser}= require("../controller/authController")

routes.post("/login",getUser)
routes.post("/signup",createUser)



// routes("/:ID")
// .get()
// .put()

module.exports = routes