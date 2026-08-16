const pool = require("../config/db");

const getAllSkills = async () => {
    const [rows] = await pool.query(
        `SELECT * FROM skills
         ORDER BY display_order ASC`
    );

    return rows;
};

module.exports = {
    getAllSkills
};