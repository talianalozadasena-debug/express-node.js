require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || 'db_3407181',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD
});

// Verificar cuando se establece una conexión
pool.on('connect', () => {
    console.log('Conexión establecida con PostgreSQL');
});

// Manejar errores de conexión
pool.on('error', (error) => {
    console.error('Error en PostgreSQL:', error.message);
});

// Probar la conexión a la base de datos
pool.query('SELECT NOW()')
    .then((resultado) => {
        console.log('Conexión exitosa a PostgreSQL');
        console.log('Fecha y hora del servidor:', resultado.rows[0].now);
    })
    .catch((error) => {
        console.error('No se pudo conectar a PostgreSQL:', error.message);
    });

// Exportar la conexión para utilizarla en app.js
module.exports = pool;


