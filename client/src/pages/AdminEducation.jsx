import { useEffect, useState } from "react";
import "./AdminEducation.css";

const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

function AdminEducation() {

    const [education, setEducation] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({
        degree: "",
        institution: "",
        start_date: "",
        end_date: "",
        percentage: "",
        description: "",
        display_order: ""
    });

    const [message, setMessage] = useState("");
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        loadEducation();
    }, []);

    const loadEducation = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/education`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to load education"
                );
            }

            setEducation(data.data || []);

        } catch (error) {
            console.error("Load education error:", error);
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
            degree: "",
            institution: "",
            start_date: "",
            end_date: "",
            percentage: "",
            description: "",
            display_order: ""
        });

        setEditingId(null);
        setShowForm(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.degree.trim() || !form.institution.trim()) {
            setMessage("Degree and institution are required.");
            return;
        }

        setSaving(true);
        setMessage("");

        try {
            const url = editingId
                ? `${API_BASE_URL}/education/${editingId}`
                : `${API_BASE_URL}/education`;

            const method = editingId ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    degree: form.degree,
                    institution: form.institution,
                    start_date: form.start_date || null,
                    end_date: form.end_date || null,
                    percentage:
                        form.percentage === ""
                            ? null
                            : Number(form.percentage),
                    description: form.description || null,
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
                    `Failed to ${editingId ? "update" : "create"} education`
                );
            }

            setMessage(
                editingId
                    ? "Education updated successfully."
                    : "Education added successfully."
            );

            resetForm();
            await loadEducation();

        } catch (error) {
            console.error("Save education error:", error);
            setMessage(error.message);

        } finally {
            setSaving(false);
        }
    };

    const handleEdit = (item) => {
        setEditingId(item.id);

        setForm({
            degree: item.degree || "",
            institution: item.institution || "",
            start_date: item.start_date
                ? String(item.start_date).slice(0, 10)
                : "",
            end_date: item.end_date
                ? String(item.end_date).slice(0, 10)
                : "",
            percentage:
                item.percentage !== null &&
                item.percentage !== undefined
                    ? String(item.percentage)
                    : "",
            description: item.description || "",
            display_order:
                item.display_order !== null &&
                item.display_order !== undefined
                    ? String(item.display_order)
                    : ""
        });

        setShowForm(true);
        setMessage("");
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this education record?"
        );

        if (!confirmed) {
            return;
        }

        try {
            const response = await fetch(
                `${API_BASE_URL}/education/${id}`,
                {
                    method: "DELETE"
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to delete education"
                );
            }

            setMessage("Education deleted successfully.");
            await loadEducation();

        } catch (error) {
            console.error("Delete education error:", error);
            setMessage(error.message);
        }
    };

    return (
        <div className="admin-education">

            <header className="admin-education-header">

                <div>
                    <span className="admin-section-label">
                        PORTFOLIO CMS
                    </span>

                    <h1>Education</h1>

                    <p>
                        Manage your academic background.
                    </p>
                </div>

                <button
                    className="admin-education-back"
                    onClick={() => {
                        window.location.href = "/admin/dashboard";
                    }}
                >
                    ← Dashboard
                </button>

            </header>

            <main className="admin-education-content">

                <div className="admin-education-toolbar">

                    <div>
                        <span className="admin-education-count">
                            {education.length} RECORDS
                        </span>

                        <h2>Your Education</h2>
                    </div>

                    <button
                        className="admin-add-education-button"
                        onClick={() => {
                            setEditingId(null);

                            setForm({
                                degree: "",
                                institution: "",
                                start_date: "",
                                end_date: "",
                                percentage: "",
                                description: "",
                                display_order: ""
                            });

                            setShowForm(true);
                            setMessage("");
                        }}
                    >
                        + Add Education
                    </button>

                </div>

                {message && (
                    <div className="admin-education-message">
                        {message}
                    </div>
                )}

                {showForm && (
                    <form
                        className="admin-education-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="admin-form-header">
                            <div>
                                <span className="admin-section-label">
                                    {editingId
                                        ? "EDIT EDUCATION"
                                        : "NEW EDUCATION"}
                                </span>

                                <h2>
                                    {editingId
                                        ? "Edit Education"
                                        : "Add Education"}
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

                        <div className="admin-education-form-grid">

                            <div className="admin-form-group">

                                <label htmlFor="degree">
                                    Degree
                                </label>

                                <input
                                    id="degree"
                                    name="degree"
                                    type="text"
                                    value={form.degree}
                                    onChange={handleChange}
                                    placeholder="e.g. Master of Computer Applications"
                                    required
                                />

                            </div>

                            <div className="admin-form-group">

                                <label htmlFor="institution">
                                    Institution
                                </label>

                                <input
                                    id="institution"
                                    name="institution"
                                    type="text"
                                    value={form.institution}
                                    onChange={handleChange}
                                    placeholder="e.g. PCCOE"
                                    required
                                />

                            </div>

                            <div className="admin-form-group">

                                <label htmlFor="start_date">
                                    Start Date
                                </label>

                                <input
                                    id="start_date"
                                    name="start_date"
                                    type="date"
                                    value={form.start_date}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="admin-form-group">

                                <label htmlFor="end_date">
                                    End Date
                                </label>

                                <input
                                    id="end_date"
                                    name="end_date"
                                    type="date"
                                    value={form.end_date}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="admin-form-group">

                                <label htmlFor="percentage">
                                    Percentage
                                </label>

                                <input
                                    id="percentage"
                                    name="percentage"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    max="100"
                                    value={form.percentage}
                                    onChange={handleChange}
                                    placeholder="e.g. 74.96"
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
                                    min="1"
                                    value={form.display_order}
                                    onChange={handleChange}
                                    placeholder="1"
                                />

                            </div>

                            <div className="admin-form-group admin-description-group">

                                <label htmlFor="description">
                                    Description
                                </label>

                                <textarea
                                    id="description"
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    placeholder="Describe your education..."
                                    rows="4"
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
                                        : "Save Education"}
                            </button>

                        </div>

                    </form>
                )}

                <div className="admin-education-list">

                    {education.length === 0 ? (

                        <div className="admin-empty-state">
                            <h3>No education records yet</h3>
                            <p>
                                Add your first education record.
                            </p>
                        </div>

                    ) : (

                        education.map((item) => (

                            <div
                                className="admin-education-card"
                                key={item.id}
                            >

                                <div className="admin-education-top">

                                    <div>
                                        <span className="admin-education-degree-label">
                                            {item.degree}
                                        </span>

                                        <h3>
                                            {item.institution}
                                        </h3>
                                    </div>

                                    <span className="admin-education-id">
                                        #{item.id}
                                    </span>

                                </div>

                                <div className="admin-education-details">

                                    <div>
                                        <span>PERIOD</span>

                                        <strong>
                                            {item.start_date
                                                ? String(item.start_date).slice(0, 10)
                                                : "-"}
                                            {" — "}
                                            {item.end_date
                                                ? String(item.end_date).slice(0, 10)
                                                : "-"}
                                        </strong>
                                    </div>

                                    <div>
                                        <span>RESULT</span>

                                        <strong>
                                            {item.percentage !== null &&
                                            item.percentage !== undefined
                                                ? `${item.percentage}%`
                                                : "-"}
                                        </strong>
                                    </div>

                                    <div>
                                        <span>ORDER</span>

                                        <strong>
                                            {item.display_order ?? "-"}
                                        </strong>
                                    </div>

                                </div>

                                {item.description && (
                                    <p className="admin-education-description">
                                        {item.description}
                                    </p>
                                )}

                                <div className="admin-education-actions">

                                    <button
                                        className="admin-edit-button"
                                        onClick={() =>
                                            handleEdit(item)
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="admin-delete-button"
                                        onClick={() =>
                                            handleDelete(item.id)
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

export default AdminEducation;
