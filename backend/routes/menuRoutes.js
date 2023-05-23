const express = require("express")
const routes =express.Router()
const menuController= require("../controller/menuController")
const validateToken =require("../middleware/tokenValidator")

routes.use(validateToken)
routes.get("/",menuController.getTodayMenu)
routes.put("/",menuController.updateWeekMenu)
routes.put("/meal",menuController.updateMenuItem)
routes.delete("/",menuController.deleteMenuItem)

module.exports = routes