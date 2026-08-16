const pool = require("../config/db");

const getAllProjects = async () => {
    const [rows] = await pool.query(
        `SELECT * FROM projects
         ORDER BY display_order ASC, created_at DESC`
    );

    return rows;
};

const getProjectById = async (id) => {
    const [rows] = await pool.query(
        "SELECT * FROM projects WHERE id = ?",
        [id]
    );

    return rows[0];
};

module.exports = {
    getAllProjects,
    getProjectById
};