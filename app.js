const express = require('express'); 
const app = express(); 
const PUERTO = 3030;

 app.get("/", (_, res) => {
     res.send('Aprendiendo express,ficha 3407181');
});

app.listen(PUERTO, () => {
     console.log( `Servidor:http://localhost:${PUERTO}`); 
}); 