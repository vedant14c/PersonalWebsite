const pool = require("../config/db");

const getAllCertifications = async () => {
    const [rows] = await pool.query(
        `SELECT * FROM certifications
         ORDER BY display_order ASC`
    );

    return rows;
};

const getCertificationById = async (id) => {
    const [rows] = await pool.query(
        "SELECT * FROM certifications WHERE id = ?",
        [id]
    );

    return rows[0];
};

const createCertification = async ({
    name,
    issuer,
    issue_date,
    credential_url,
    display_order
}) => {
    const [result] = await pool.query(
        `INSERT INTO certifications
        (name, issuer, issue_date, credential_url, display_order)
        VALUES (?, ?, ?, ?, ?)`,
        [
            name,
            issuer,
            issue_date || null,
            credential_url || null,
            display_order || null
        ]
    );

    return getCertificationById(result.insertId);
};

const updateCertification = async (
    id,
    {
        name,
        issuer,
        issue_date,
        credential_url,
        display_order
    }
) => {
    await pool.query(
        `UPDATE certifications
         SET name = ?,
             issuer = ?,
             issue_date = ?,
             credential_url = ?,
             display_order = ?
         WHERE id = ?`,
        [
            name,
            issuer,
            issue_date || null,
            credential_url || null,
            display_order || null,
            id
        ]
    );

    return getCertificationById(id);
};

const deleteCertification = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM certifications WHERE id = ?",
        [id]
    );

    return result.affectedRows > 0;
};

module.exports = {
    getAllCertifications,
    getCertificationById,
    createCertification,
    updateCertification,
    deleteCertification
};