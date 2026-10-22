const {Router} = require("express")

const enrutadorUsuarios = require ("./usuariosRouter")

const enrutadorGeneral = new Router()

enrutadorGeneral.use("/usuarios", enrutadorUsuarios)

//enrutadorGeneral.use("/productos", enrutadorProductos)

module.exports = enrutadorGeneral