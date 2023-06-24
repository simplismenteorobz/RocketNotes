const { Router } = require("express")

const usersController = require("../controllers/usersController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRoutes = Router()

const UsersController = new usersController()

usersRoutes.post("/", UsersController.create)
usersRoutes.put("/", ensureAuthenticated, UsersController.update)

module.exports = usersRoutes