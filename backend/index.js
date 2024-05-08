const express = require("express");
const { Pool } = require('pg');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: "https://mahuliwebsite.netlify.app",
}));

const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

// PostgreSQL Schema
const createUserTable = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    subject VARCHAR(255),
    message TEXT,
    contact VARCHAR(255)
)`;

pool.query(createUserTable, (err, results) => {
    if (err) throw err;
    console.log("Users table created successfully");
});

// Endpoint to save user data
app.post('/save', (req, res) => {
    const { username, subject, message, contact } = req.body;
    const insertUserQuery = `INSERT INTO users (username, subject, message, contact) VALUES ($1, $2, $3, $4)`;
    pool.query(insertUserQuery, [username, subject, message, contact], (err, results) => {
        if (err) {
            console.error('Error saving user data: ' + err);
            res.status(500).json({ error: 'Error saving user data' });
            return;
        }
        res.json({ message: 'User data saved successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
