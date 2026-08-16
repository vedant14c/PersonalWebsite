const pool = require("../config/db");

const getAllEducation = async () => {
    const [rows] = await pool.query(
        `SELECT * FROM education
         ORDER BY display_order ASC`
    );

    return rows;
};

module.exports = {
    getAllEducation
};