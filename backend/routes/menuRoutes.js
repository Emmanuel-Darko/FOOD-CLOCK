const express = require("express")
const routes =express.Router()
const {getAll,getOne,updateMenu,deleteOne}= require("../controller/menuController")
const { get } = require("./authRoutes")

routes.get("/",getAll)
routes.put("/",updateMenu)
routes.get("/:id",getOne)
routes.delete("/",deleteOne)

module.exports = routes