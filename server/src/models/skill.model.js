const pool = require("../config/db");

const getAllSkills = async () => {
    const [rows] = await pool.query(
        `SELECT * FROM skills
         ORDER BY display_order ASC`
    );

    return rows;
};

const getSkillById = async (id) => {
    const [rows] = await pool.query(
        "SELECT * FROM skills WHERE id = ?",
        [id]
    );

    return rows[0];
};

const createSkill = async (skill) => {
    const [result] = await pool.query(
        `INSERT INTO skills
        (category, name, display_order)
        VALUES (?, ?, ?)`,
        [
            skill.category,
            skill.name,
            skill.display_order
        ]
    );

    return result.insertId;
};

const updateSkill = async (id, skill) => {
    const [result] = await pool.query(
        `UPDATE skills
         SET category = ?,
             name = ?,
             display_order = ?
         WHERE id = ?`,
        [
            skill.category,
            skill.name,
            skill.display_order,
            id
        ]
    );

    return result.affectedRows > 0;
};

const deleteSkill = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM skills WHERE id = ?",
        [id]
    );

    return result.affectedRows > 0;
};

module.exports = {
    getAllSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill
};