import express from 'express'
//leer el archivo .env
import {configDotenv}from "dotenv"
configDotenv()
const app = express()
const puerto = process.env.PUERTO || 3000

 app.get("/",function (req, res){
     res.send('Aprendiendo express,ficha 3407181 31 de julio')
})

//otro endpoint

app.listen(puerto, function (){
     console.log( `Servidor en funcionamiento en el puerto ${puerto}`) 
}) 