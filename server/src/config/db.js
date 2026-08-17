const mysql = require("mysql2/promise");
require("dotenv").config();

const poolConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

// Aiven / production requires SSL
if (process.env.NODE_ENV === "production") {
    poolConfig.ssl = {
        rejectUnauthorized: false
    };
}

const pool = mysql.createPool(poolConfig);

module.exports = pool;