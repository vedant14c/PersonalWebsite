const pool = require("../config/db");

const createMessage = async ({ name, email, subject, message }) => {
    const [result] = await pool.query(
        `INSERT INTO messages
        (name, email, subject, message)
        VALUES (?, ?, ?, ?)`,
        [name, email, subject, message]
    );

    return result.insertId;
};

module.exports = {
    createMessage
};