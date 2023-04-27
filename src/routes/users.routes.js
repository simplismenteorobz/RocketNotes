const { Router } = require("express")

const usersController = require("../controllers/usersController")

const usersRoutes = Router()

function myMiddleware(request, response, next) {
  next()
}

const UsersController = new usersController()

usersRoutes.post("/", myMiddleware, UsersController.create)

module.exports = usersRoutes