const pool = require("../config/db");

const getAllCertifications = async () => {
    const [rows] = await pool.query(
        `SELECT * FROM certifications
         ORDER BY display_order ASC`
    );

    return rows;
};

module.exports = {
    getAllCertifications
};