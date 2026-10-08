require("dotenv").config()

const express = require("express")

const miApp = express()

miApp.use(express.json())
miApp.use(express.urlencoded({ extended: true }))

miApp.get("/", (req, res) => {
    res.send("MI API Rest ficha 3407181.")
})

module.exports = miApp