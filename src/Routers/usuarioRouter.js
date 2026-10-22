
const {Router} = require("express")
//necesita el controller 
const listarUsuarios =require("../controllers/usuariosController") 
const crearUsuarios =require("../controllers/usuariosController") 

const enrutadorUsuario = new Router()

enrutadorUsuario.get("/listado", listarUsuarios)
enrutadorUsuario.post("/crear", crearUsuarios)
//enrutadorUsuario.get("/{id}")
//enrutadorUsuario.post("/crear)")
//enrutadorUsuario.delete("/eliminar")

module.exports = enrutadorUsuario