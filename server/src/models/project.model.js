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

const createProject = async (project) => {
    const {
        title,
        description,
        tech_stack,
        github_url,
        live_url,
        image_url,
        is_featured,
        display_order
    } = project;

    const [result] = await pool.query(
        `INSERT INTO projects
        (
            title,
            description,
            tech_stack,
            github_url,
            live_url,
            image_url,
            is_featured,
            display_order
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            title,
            description,
            JSON.stringify(tech_stack || []),
            github_url || null,
            live_url || null,
            image_url || null,
            is_featured || false,
            display_order || 0
        ]
    );

    return getProjectById(result.insertId);
};

const updateProject = async (id, project) => {
    const {
        title,
        description,
        tech_stack,
        github_url,
        live_url,
        image_url,
        is_featured,
        display_order
    } = project;

    await pool.query(
        `UPDATE projects
         SET
            title = ?,
            description = ?,
            tech_stack = ?,
            github_url = ?,
            live_url = ?,
            image_url = ?,
            is_featured = ?,
            display_order = ?
         WHERE id = ?`,
        [
            title,
            description,
            JSON.stringify(tech_stack || []),
            github_url || null,
            live_url || null,
            image_url || null,
            is_featured ? 1 : 0,
            display_order || 0,
            id
        ]
    );

    return getProjectById(id);
};

const deleteProject = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM projects WHERE id = ?",
        [id]
    );

    return result.affectedRows > 0;
};

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
};