require("dotenv").config()

const express = require("express")

const miApp = express()

const pool = require('./utilidades/conexion');

miApp.use(express.json())
miApp.use(express.urlencoded({ extended: true }))

miApp.get("/", (req, res) => {
    res.send("MI API Rest ficha 3407181.")
})


miApp.get('/probar-db', async (req, res) => {
    try {
        const resultado = await pool.query(
            'SELECT current_database() AS base_datos'
        );

        res.json({
            mensaje: 'Conexión exitosa con PostgreSQL',
            base_datos: resultado.rows[0].base_datos
        });
    } catch (error) {
        console.error('Error de conexión:', error.message);

        res.status(500).json({
            mensaje: 'Error al conectar con PostgreSQL'
        });
    }
});


module.exports = miApp