const skillModel = require("../models/skill.model");

const getSkills = async (req, res) => {
    try {
        const skills = await skillModel.getAllSkills();

        res.json({
            success: true,
            count: skills.length,
            data: skills
        });
    } catch (error) {
        console.error("Error fetching skills:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch skills"
        });
    }
};

module.exports = {
    getSkills
};