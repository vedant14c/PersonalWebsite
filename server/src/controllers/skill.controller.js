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

const getSkill = async (req, res) => {
    try {
        const skill = await skillModel.getSkillById(req.params.id);

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: "Skill not found"
            });
        }

        res.json({
            success: true,
            data: skill
        });
    } catch (error) {
        console.error("Error fetching skill:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch skill"
        });
    }
};

const createSkill = async (req, res) => {
    try {
        const { category, name, display_order } = req.body;

        if (!category || !name) {
            return res.status(400).json({
                success: false,
                message: "Category and name are required"
            });
        }

        const id = await skillModel.createSkill({
            category,
            name,
            display_order
        });

        res.status(201).json({
            success: true,
            message: "Skill created successfully",
            id
        });
    } catch (error) {
        console.error("Error creating skill:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create skill"
        });
    }
};

const updateSkill = async (req, res) => {
    try {
        const { category, name, display_order } = req.body;

        const skill = await skillModel.getSkillById(req.params.id);

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: "Skill not found"
            });
        }

        await skillModel.updateSkill(req.params.id, {
            category,
            name,
            display_order
        });

        res.json({
            success: true,
            message: "Skill updated successfully"
        });
    } catch (error) {
        console.error("Error updating skill:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update skill"
        });
    }
};

const deleteSkill = async (req, res) => {
    try {
        const skill = await skillModel.getSkillById(req.params.id);

        if (!skill) {
            return res.status(404).json({
                success: false,
                message: "Skill not found"
            });
        }

        await skillModel.deleteSkill(req.params.id);

        res.json({
            success: true,
            message: "Skill deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting skill:", error);

        res.status(500).json({
            success: false,
            message: "Failed to delete skill"
        });
    }
};

module.exports = {
    getSkills,
    getSkill,
    createSkill,
    updateSkill,
    deleteSkill
};