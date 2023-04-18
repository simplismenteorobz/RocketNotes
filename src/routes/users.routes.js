const { Router } = require("express")

const usersRoutes = Router()

usersRoutes.post("/", (request, response) => {
  const { name, email, password } = request.body

  response.send(`Usuários: ${name}; Email: ${email} e a Senha: ${password}`)
})

module.exports = usersRoutes