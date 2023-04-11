const express = require("express")
const routes =express.Router()
const {getMenu,updateOne,updateMenu,deleteOne}= require("../controller/menuController")

routes.get("/",getMenu)
routes.put("/",updateMenu)
routes.put("/meal",updateOne)
routes.delete("/",deleteOne)

module.exports = routes