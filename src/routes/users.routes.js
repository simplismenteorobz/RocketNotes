const { Router } = require("express")

const usersController = require("../controllers/usersController")

const usersRoutes = Router()

function myMiddleware(request, response, next) {
  next()
}

const UsersController = new usersController()

usersRoutes.post("/", UsersController.create)
usersRoutes.put("/:id", UsersController.update)

module.exports = usersRoutes