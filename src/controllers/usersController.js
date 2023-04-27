/**
 * index - GET para listar vários registros.
 * show - GET para exibir um registro específico.
 * create - POST criar um registro.
 * put - PUT para atualizar um registro.
 * delete -DELETE para remover um registro.
 */

const AppError = require("../utils/AppError")
class usersController {
  create(request, response) {
    const { name, email, password } = request.body

    if(!name) {
      throw new AppError("Nome é obrigatório!")
    }

    response.json({ name, email, password })
  }

}

module.exports = usersController