import { useEffect, useState } from "react";
import "./AdminProjects.css";

function AdminProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const [form, setForm] = useState({
        title: "",
        description: "",
        tech_stack: "",
        github_url: "",
        live_url: "",
        image_url: "",
        is_featured: false,
        display_order: 0
    });

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/projects`
            );

            const data = await response.json();

            if (data.success) {
                setProjects(data.data);
            }
        } catch (error) {
            console.error("Failed to load projects:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (project) => {
        setEditingProject(project);

        setForm({
            title: project.title || "",
            description: project.description || "",
            tech_stack: Array.isArray(project.tech_stack)
                ? project.tech_stack.join(", ")
                : "",
            github_url: project.github_url || "",
            live_url: project.live_url || "",
            image_url: project.image_url || "",
            is_featured: Boolean(project.is_featured),
            display_order: project.display_order || 0
        });

        setMessage("");
        setShowForm(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSaving(true);
        setMessage("");

        try {
            const projectData = {
                ...form,
                tech_stack: form.tech_stack
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean),
                display_order: Number(form.display_order)
            };

            const url = editingProject
                ? `${API_BASE_URL}/projects/${editingProject.id}`
                : `${API_BASE_URL}/projects`;

            const method = editingProject ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(projectData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    (editingProject
                        ? "Failed to update project"
                        : "Failed to create project")
                );
            }

            setMessage(
                editingProject
                    ? "Project updated successfully."
                    : "Project added successfully."
            );

            setForm({
                title: "",
                description: "",
                tech_stack: "",
                github_url: "",
                live_url: "",
                image_url: "",
                is_featured: false,
                display_order: 0
            });

            setEditingProject(null);
            setShowForm(false);

            await loadProjects();

        } catch (error) {
            console.error(error);
            setMessage(error.message);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this project?"
        );

        if (!confirmed) {
            return;
        }

        try {
            const response = await fetch(
                `${API_BASE_URL}/projects/${id}`,
                {
                    method: "DELETE"
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to delete project"
                );
            }

            setMessage("Project deleted successfully.");

            await loadProjects();

        } catch (error) {
            console.error("Delete project error:", error);
            setMessage(error.message);
        }
    };

    return (
        <div className="admin-page">

            <header className="admin-page-header">
                <div>
                    <p>PORTFOLIO CMS</p>
                    <h1>Projects</h1>
                    <span>Manage your portfolio projects</span>
                </div>

                <button
                    className="admin-add-button"
                    onClick={() => {
                        setEditingProject(null);
                        setForm({
                            title: "",
                            description: "",
                            tech_stack: "",
                            github_url: "",
                            live_url: "",
                            image_url: "",
                            is_featured: false,
                            display_order: 0
                        });
                        setMessage("");
                        setShowForm(!showForm);
                    }}
                >
                    {showForm ? "Cancel" : "+ Add Project"}
                </button>
            </header>

            <main className="admin-page-content">

                {message && (
                    <div className="admin-message">
                        {message}
                    </div>
                )}

                {showForm && (
                    <div className="admin-form-section">

                        <p className="admin-section-label">
                            {editingProject ? "EDIT PROJECT" : "NEW PROJECT"}
                        </p>

                        <h2>
                            {editingProject ? "Edit Project" : "Add Project"}
                        </h2>

                        <form onSubmit={handleSubmit}>

                            <label>Title</label>
                            <input
                                type="text"
                                value={form.title}
                                onChange={(e) =>
                                    setForm({ ...form, title: e.target.value })
                                }
                                placeholder="Project title"
                                required
                            />

                            <label>Description</label>
                            <textarea
                                value={form.description}
                                onChange={(e) =>
                                    setForm({ ...form, description: e.target.value })
                                }
                                placeholder="Project description"
                                rows={4}
                                required
                            />

                            <label>Tech Stack (comma separated)</label>
                            <input
                                type="text"
                                value={form.tech_stack}
                                onChange={(e) =>
                                    setForm({ ...form, tech_stack: e.target.value })
                                }
                                placeholder="React, Node.js, MySQL"
                            />

                            <label>GitHub URL</label>
                            <input
                                type="url"
                                value={form.github_url}
                                onChange={(e) =>
                                    setForm({ ...form, github_url: e.target.value })
                                }
                                placeholder="https://github.com/..."
                            />

                            <label>Live URL</label>
                            <input
                                type="url"
                                value={form.live_url}
                                onChange={(e) =>
                                    setForm({ ...form, live_url: e.target.value })
                                }
                                placeholder="https://..."
                            />

                            <label>Image URL</label>
                            <input
                                type="text"
                                value={form.image_url}
                                onChange={(e) =>
                                    setForm({ ...form, image_url: e.target.value })
                                }
                                placeholder="Image URL or path"
                            />

                            <label>Display Order</label>
                            <input
                                type="number"
                                value={form.display_order}
                                onChange={(e) =>
                                    setForm({ ...form, display_order: e.target.value })
                                }
                            />

                            <div className="admin-checkbox">
                                <input
                                    type="checkbox"
                                    id="is_featured"
                                    checked={form.is_featured}
                                    onChange={(e) =>
                                        setForm({ ...form, is_featured: e.target.checked })
                                    }
                                />
                                <label htmlFor="is_featured">Featured Project</label>
                            </div>

                            <button
                                type="submit"
                                className="admin-save-button"
                                disabled={saving}
                            >
                                {saving
                                    ? "Saving..."
                                    : editingProject
                                        ? "Save Changes →"
                                        : "Save Project →"}
                            </button>

                        </form>

                    </div>
                )}

                {loading ? (
                    <p>Loading projects...</p>
                ) : projects.length === 0 ? (
                    <p>No projects found.</p>
                ) : (
                    <div className="admin-project-list">

                        {projects.map((project) => (
                            <div
                                className="admin-project-card"
                                key={project.id}
                            >
                                <div className="admin-project-info">

                                    <span>
                                        PROJECT #{project.id}
                                    </span>

                                    <h3>
                                        {project.title}
                                    </h3>

                                    <p>
                                        {project.description}
                                    </p>

                                </div>

                                <div className="admin-project-actions">

                                    <button
                                        className="admin-edit-button"
                                        onClick={() => handleEdit(project)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="admin-delete-button"
                                        onClick={() => handleDelete(project.id)}
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </main>

        </div>
    );
}

export default AdminProjects;
