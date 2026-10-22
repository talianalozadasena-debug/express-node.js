// En src/Controllers/usuariosController.js
const { listar, crear } = require("../Services/usuarioService");

const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await listar(); 
        res.status(200).json({ usuarios });
    } catch (error) {
        res.status(500).json({ "Error-mensaje": error.message });
    }
}


const crearUsuario = async (req, res) => {
    try {
        const { email, username, clave, foto } = req.body;
        const nuevoUsuario = await crear(email, username, clave, foto); r
        res.status(201).json({ nuevoUsuario });
    } catch (error) {
        res.status(500).json({ "Error-mensaje": error.message });
    }
}

module.exports = {
  listarUsuarios,
  crearUsuario
};
module.exports = { listarUsuarios, crearUsuarios };
