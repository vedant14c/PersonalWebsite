const certificationModel = require("../models/certification.model");

const getCertifications = async (req, res) => {
    try {
        const certifications =
            await certificationModel.getAllCertifications();

        res.json({
            success: true,
            count: certifications.length,
            data: certifications
        });
    } catch (error) {
        console.error("Error fetching certifications:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch certifications"
        });
    }
};

module.exports = {
    getCertifications
};