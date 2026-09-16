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

const getCertification = async (req, res) => {
    try {
        const certification =
            await certificationModel.getCertificationById(
                req.params.id
            );

        if (!certification) {
            return res.status(404).json({
                success: false,
                message: "Certification not found"
            });
        }

        res.json({
            success: true,
            data: certification
        });

    } catch (error) {
        console.error("Error fetching certification:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch certification"
        });
    }
};

const createCertification = async (req, res) => {
    try {
        const {
            name,
            issuer,
            issue_date,
            credential_url,
            display_order
        } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Certification name is required"
            });
        }

        const certification =
            await certificationModel.createCertification({
                name,
                issuer,
                issue_date,
                credential_url,
                display_order
            });

        res.status(201).json({
            success: true,
            message: "Certification added successfully",
            data: certification
        });

    } catch (error) {
        console.error("Error creating certification:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create certification"
        });
    }
};

const updateCertification = async (req, res) => {
    try {
        const existingCertification =
            await certificationModel.getCertificationById(
                req.params.id
            );

        if (!existingCertification) {
            return res.status(404).json({
                success: false,
                message: "Certification not found"
            });
        }

        const {
            name,
            issuer,
            issue_date,
            credential_url,
            display_order
        } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Certification name is required"
            });
        }

        const certification =
            await certificationModel.updateCertification(
                req.params.id,
                {
                    name,
                    issuer,
                    issue_date,
                    credential_url,
                    display_order
                }
            );

        res.json({
            success: true,
            message: "Certification updated successfully",
            data: certification
        });

    } catch (error) {
        console.error("Error updating certification:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update certification"
        });
    }
};

const deleteCertification = async (req, res) => {
    try {
        const deleted =
            await certificationModel.deleteCertification(
                req.params.id
            );

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Certification not found"
            });
        }

        res.json({
            success: true,
            message: "Certification deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting certification:", error);

        res.status(500).json({
            success: false,
            message: "Failed to delete certification"
        });
    }
};

module.exports = {
    getCertifications,
    getCertification,
    createCertification,
    updateCertification,
    deleteCertification
};