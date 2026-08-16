const educationModel = require("../models/education.model");

const getEducation = async (req, res) => {
    try {
        const education = await educationModel.getAllEducation();

        res.json({
            success: true,
            count: education.length,
            data: education
        });
    } catch (error) {
        console.error("Error fetching education:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch education"
        });
    }
};

module.exports = {
    getEducation
};