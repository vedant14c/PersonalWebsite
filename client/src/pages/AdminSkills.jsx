import { useEffect, useState } from "react";
import "./AdminSkills.css";

const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

function AdminSkills() {

    const [skills, setSkills] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({
        category: "",
        name: "",
        display_order: ""
    });

    const [message, setMessage] = useState("");
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        loadSkills();
    }, []);

    const loadSkills = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/skills`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to load skills");
            }

            setSkills(data.data || []);

        } catch (error) {
            console.error("Load skills error:", error);
            setMessage(error.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const resetForm = () => {
        setForm({
            category: "",
            name: "",
            display_order: ""
        });

        setEditingId(null);
        setShowForm(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.category.trim() || !form.name.trim()) {
            setMessage("Category and name are required.");
            return;
        }

        setSaving(true);
        setMessage("");

        try {

            const url = editingId
                ? `${API_BASE_URL}/skills/${editingId}`
                : `${API_BASE_URL}/skills`;

            const method = editingId ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    category: form.category,
                    name: form.name,
                    display_order:
                        form.display_order === ""
                            ? null
                            : Number(form.display_order)
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    `Failed to ${editingId ? "update" : "create"} skill`
                );
            }

            setMessage(
                editingId
                    ? "Skill updated successfully."
                    : "Skill added successfully."
            );

            resetForm();
            await loadSkills();

        } catch (error) {
            console.error("Save skill error:", error);
            setMessage(error.message);

        } finally {
            setSaving(false);
        }
    };

    const handleEdit = (skill) => {
        setEditingId(skill.id);

        setForm({
            category: skill.category || "",
            name: skill.name || "",
            display_order:
                skill.display_order !== null &&
                skill.display_order !== undefined
                    ? String(skill.display_order)
                    : ""
        });

        setShowForm(true);
        setMessage("");
    };

    const handleDelete = async (id) => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this skill?"
        );

        if (!confirmed) {
            return;
        }

        try {

            const response = await fetch(
                `${API_BASE_URL}/skills/${id}`,
                {
                    method: "DELETE"
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to delete skill"
                );
            }

            setMessage("Skill deleted successfully.");

            await loadSkills();

        } catch (error) {
            console.error("Delete skill error:", error);
            setMessage(error.message);
        }
    };

    return (
        <div className="admin-skills">

            <header className="admin-skills-header">

                <div>
                    <span className="admin-section-label">
                        PORTFOLIO CMS
                    </span>

                    <h1>Skills</h1>

                    <p>
                        Manage your technical skills.
                    </p>
                </div>

                <button
                    className="admin-skills-back"
                    onClick={() => {
                        window.location.href = "/admin/dashboard";
                    }}
                >
                    ← Dashboard
                </button>

            </header>

            <main className="admin-skills-content">

                <div className="admin-skills-toolbar">

                    <div>
                        <span className="admin-skills-count">
                            {skills.length} SKILLS
                        </span>

                        <h2>Your Skills</h2>
                    </div>

                    <button
                        className="admin-add-skill-button"
                        onClick={() => {
                            setEditingId(null);

                            setForm({
                                category: "",
                                name: "",
                                display_order: ""
                            });

                            setShowForm(true);
                            setMessage("");
                        }}
                    >
                        + Add Skill
                    </button>

                </div>

                {message && (
                    <div className="admin-skills-message">
                        {message}
                    </div>
                )}

                {showForm && (
                    <form
                        className="admin-skill-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="admin-form-header">
                            <div>
                                <span className="admin-section-label">
                                    {editingId
                                        ? "EDIT SKILL"
                                        : "NEW SKILL"}
                                </span>

                                <h2>
                                    {editingId
                                        ? "Edit Skill"
                                        : "Add Skill"}
                                </h2>
                            </div>

                            <button
                                type="button"
                                className="admin-form-close"
                                onClick={resetForm}
                            >
                                ×
                            </button>
                        </div>

                        <div className="admin-form-grid">

                            <div className="admin-form-group">

                                <label htmlFor="category">
                                    Category
                                </label>

                                <input
                                    id="category"
                                    name="category"
                                    type="text"
                                    value={form.category}
                                    onChange={handleChange}
                                    placeholder="e.g. Frontend"
                                    required
                                />

                            </div>

                            <div className="admin-form-group">

                                <label htmlFor="name">
                                    Skill Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="e.g. React"
                                    required
                                />

                            </div>

                            <div className="admin-form-group">

                                <label htmlFor="display_order">
                                    Display Order
                                </label>

                                <input
                                    id="display_order"
                                    name="display_order"
                                    type="number"
                                    value={form.display_order}
                                    onChange={handleChange}
                                    placeholder="1"
                                    min="1"
                                />

                            </div>

                        </div>

                        <div className="admin-form-actions">

                            <button
                                type="button"
                                className="admin-cancel-button"
                                onClick={resetForm}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="admin-save-button"
                                disabled={saving}
                            >
                                {saving
                                    ? "Saving..."
                                    : editingId
                                        ? "Save Changes"
                                        : "Save Skill"}
                            </button>

                        </div>

                    </form>
                )}

                <div className="admin-skills-list">

                    {skills.length === 0 ? (

                        <div className="admin-empty-state">
                            <h3>No skills yet</h3>
                            <p>
                                Add your first technical skill.
                            </p>
                        </div>

                    ) : (

                        skills.map((skill) => (

                            <div
                                className="admin-skill-card"
                                key={skill.id}
                            >

                                <div className="admin-skill-number">
                                    #{skill.id}
                                </div>

                                <div className="admin-skill-info">

                                    <span className="admin-skill-category">
                                        {skill.category}
                                    </span>

                                    <h3>
                                        {skill.name}
                                    </h3>

                                </div>

                                <div className="admin-skill-order">
                                    Order: {skill.display_order ?? "-"}
                                </div>

                                <div className="admin-skill-actions">

                                    <button
                                        className="admin-edit-button"
                                        onClick={() =>
                                            handleEdit(skill)
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="admin-delete-button"
                                        onClick={() =>
                                            handleDelete(skill.id)
                                        }
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </main>

        </div>
    );
}

export default AdminSkills;
