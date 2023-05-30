const { Router } = require("express")

const tagsController = require("../controllers/tagsController")

const tagsRoutes = Router()

const TagsController = new tagsController()

tagsRoutes.get("/", TagsController.index)

module.exports = tagsRoutes