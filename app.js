import express from 'express';
//leer el archivo .env
import {configDotenv}from "dotenv"
configDotenv()

const app = express();
const puerto = process.env.PUERTO || 3030

app.get("/", (_, res)=>{
     res.send("Aprendiendo express, con la ficha 3407181, ADSO en el SENA 31 de julio")
})

 app.get("/Otraruta", (req, res) =>{
     //usando template string
     res.send(`<h1>Otra ejemplo de ruta</h1
           <h2>End point con res.send</h2>`)
});

app.get("/ruta2", (req, res) =>{
     res.json({"nombre":"taliana","apellido": "lozada", "cargo": "aprendiz"})
})

app.get("/ruta3/:aprendiz/:otrodato" , (req, res)=>{
    const dato_aprendiz = req.params.aprendiz
    const otro_dato= req.params.otrodato    
     res.json({"nombre": dato_aprendiz, "Otro": otro_dato})

})

app.get("/ruta4", (req, res)=>{
     //capturar la el parametro de consulta query
     const orden = req.query.orden || "SIN ORDENAR"
     const pagina = req.query.pagina || 1
     res.send(`<h1>listado aprendices</h1>
       <p>el listado esta en orden ${orden}</p>
       <p> pagina: ${pagina}</p>`)
})

app.listen(puerto, function (){
     console.log( `SERVIDOR:http://localhost:${puerto} `); 
}); 

