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

const getEducationItem = async (req, res) => {
    try {
        const education = await educationModel.getEducationById(
            req.params.id
        );

        if (!education) {
            return res.status(404).json({
                success: false,
                message: "Education record not found"
            });
        }

        res.json({
            success: true,
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

const createEducation = async (req, res) => {
    try {
        const {
            degree,
            institution,
            start_date,
            end_date,
            percentage,
            description,
            display_order
        } = req.body;

        if (!degree || !institution) {
            return res.status(400).json({
                success: false,
                message: "Degree and institution are required"
            });
        }

        const education = await educationModel.createEducation({
            degree,
            institution,
            start_date,
            end_date,
            percentage,
            description,
            display_order
        });

        res.status(201).json({
            success: true,
            message: "Education added successfully",
            data: education
        });

    } catch (error) {
        console.error("Error creating education:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create education"
        });
    }
};

const updateEducation = async (req, res) => {
    try {
        const existingEducation =
            await educationModel.getEducationById(req.params.id);

        if (!existingEducation) {
            return res.status(404).json({
                success: false,
                message: "Education record not found"
            });
        }

        const {
            degree,
            institution,
            start_date,
            end_date,
            percentage,
            description,
            display_order
        } = req.body;

        if (!degree || !institution) {
            return res.status(400).json({
                success: false,
                message: "Degree and institution are required"
            });
        }

        const education = await educationModel.updateEducation(
            req.params.id,
            {
                degree,
                institution,
                start_date,
                end_date,
                percentage,
                description,
                display_order
            }
        );

        res.json({
            success: true,
            message: "Education updated successfully",
            data: education
        });

    } catch (error) {
        console.error("Error updating education:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update education"
        });
    }
};

const deleteEducation = async (req, res) => {
    try {
        const deleted =
            await educationModel.deleteEducation(req.params.id);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Education record not found"
            });
        }

        res.json({
            success: true,
            message: "Education deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting education:", error);

        res.status(500).json({
            success: false,
            message: "Failed to delete education"
        });
    }
};

module.exports = {
    getEducation,
    getEducationItem,
    createEducation,
    updateEducation,
    deleteEducation
};