const projectModel = require("../models/project.model");

const getProjects = async (req, res) => {
    try {
        const projects = await projectModel.getAllProjects();

        res.json({
            success: true,
            count: projects.length,
            data: projects
        });
    } catch (error) {
        console.error("Error fetching projects:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch projects"
        });
    }
};

const getProject = async (req, res) => {
    try {
        const project = await projectModel.getProjectById(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            });
        }

        res.json({
            success: true,
            data: project
        });
    } catch (error) {
        console.error("Error fetching project:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch project"
        });
    }
};

module.exports = {
    getProjects,
    getProject
};