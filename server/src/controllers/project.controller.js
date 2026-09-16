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


const createProject = async (req, res) => {
    try {
        const {
            title,
            description,
            tech_stack,
            github_url,
            live_url,
            image_url,
            is_featured,
            display_order
        } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and description are required"
            });
        }

        const project = await projectModel.createProject({
            title,
            description,
            tech_stack,
            github_url,
            live_url,
            image_url,
            is_featured,
            display_order
        });

        res.status(201).json({
            success: true,
            message: "Project created successfully",
            data: project
        });

    } catch (error) {
        console.error("Error creating project:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create project"
        });
    }
};


const updateProject = async (req, res) => {
    try {
        const project = await projectModel.getProjectById(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            });
        }

        const {
            title,
            description,
            tech_stack,
            github_url,
            live_url,
            image_url,
            is_featured,
            display_order
        } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and description are required"
            });
        }

        const updatedProject = await projectModel.updateProject(
            req.params.id,
            {
                title,
                description,
                tech_stack,
                github_url,
                live_url,
                image_url,
                is_featured,
                display_order
            }
        );

        res.json({
            success: true,
            message: "Project updated successfully",
            data: updatedProject
        });

    } catch (error) {
        console.error("Error updating project:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update project"
        });
    }
};


const deleteProject = async (req, res) => {
    try {
        const project = await projectModel.getProjectById(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            });
        }

        await projectModel.deleteProject(req.params.id);

        res.json({
            success: true,
            message: "Project deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting project:", error);

        res.status(500).json({
            success: false,
            message: "Failed to delete project"
        });
    }
};


module.exports = {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
};