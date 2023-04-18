const express = require('express')

const app = express()

app.get("/users", (request, response) => {
  const {page, limit} = request.query

  response.send(`Página: ${page}. Mostrar${limit}`)
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))