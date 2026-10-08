const miApp = require("./app")
const PUERTO = process.env.PUERTO

miApp.listen(PUERTO, () => {
    console.log(`servidor corriendo: http://localhost:${PUERTO}`)
})