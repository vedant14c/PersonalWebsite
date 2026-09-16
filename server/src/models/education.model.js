const pool = require("../config/db");

const getAllEducation = async () => {
    const [rows] = await pool.query(
        `SELECT * FROM education
         ORDER BY display_order ASC`
    );

    return rows;
};

const getEducationById = async (id) => {
    const [rows] = await pool.query(
        "SELECT * FROM education WHERE id = ?",
        [id]
    );

    return rows[0];
};

const createEducation = async ({
    degree,
    institution,
    start_date,
    end_date,
    percentage,
    description,
    display_order
}) => {
    const [result] = await pool.query(
        `INSERT INTO education
        (degree, institution, start_date, end_date, percentage, description, display_order)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
            degree,
            institution,
            start_date || null,
            end_date || null,
            percentage || null,
            description || null,
            display_order || null
        ]
    );

    return getEducationById(result.insertId);
};

const updateEducation = async (
    id,
    {
        degree,
        institution,
        start_date,
        end_date,
        percentage,
        description,
        display_order
    }
) => {
    await pool.query(
        `UPDATE education
         SET degree = ?,
             institution = ?,
             start_date = ?,
             end_date = ?,
             percentage = ?,
             description = ?,
             display_order = ?
         WHERE id = ?`,
        [
            degree,
            institution,
            start_date || null,
            end_date || null,
            percentage || null,
            description || null,
            display_order || null,
            id
        ]
    );

    return getEducationById(id);
};

const deleteEducation = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM education WHERE id = ?",
        [id]
    );

    return result.affectedRows > 0;
};

module.exports = {
    getAllEducation,
    getEducationById,
    createEducation,
    updateEducation,
    deleteEducation
};