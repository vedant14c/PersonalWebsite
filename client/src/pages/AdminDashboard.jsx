import { useEffect } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {

    useEffect(() => {
        const loggedIn = localStorage.getItem("adminLoggedIn");

        if (loggedIn !== "true") {
            window.location.href = "/admin";
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("adminLoggedIn");
        window.location.href = "/admin";
    };

    const adminSections = [
        {
            title: "Projects",
            description: "Manage your portfolio projects",
            icon: "◈",
            action: "Manage Projects"
        },
        {
            title: "Skills",
            description: "Manage your technical skills",
            icon: "✦",
            action: "Manage Skills"
        },
        {
            title: "Education",
            description: "Manage your academic records",
            icon: "▣",
            action: "Manage Education"
        },
        {
            title: "Certifications",
            description: "Manage your certificates",
            icon: "◇",
            action: "Manage Certificates"
        },
        {
            title: "Experience",
            description: "Manage your work experience",
            icon: "◉",
            action: "Manage Experience"
        },
        {
            title: "Messages",
            description: "View messages from visitors",
            icon: "✉",
            action: "View Messages"
        }
    ];

    return (
        <div className="admin-dashboard">

            <header className="admin-header">

                <div>
                    <p className="admin-label">PORTFOLIO CMS</p>
                    <h1>Portfolio Admin</h1>
                </div>

                <button
                    className="admin-logout"
                    onClick={logout}
                >
                    Logout
                    <span>↗</span>
                </button>

            </header>

            <main className="admin-content">

                <div className="admin-intro">
                    <p className="admin-section-label">DASHBOARD</p>

                    <h2>
                        Manage your portfolio
                    </h2>

                    <p>
                        Update your projects, skills, education,
                        certifications, experience and messages.
                    </p>
                </div>

                <div className="admin-stats">

                    <div className="admin-stat">
                        <span className="admin-stat-label">Projects</span>
                        <span className="admin-stat-number">3</span>
                    </div>

                    <div className="admin-stat">
                        <span className="admin-stat-label">Skills</span>
                        <span className="admin-stat-number">18</span>
                    </div>

                    <div className="admin-stat">
                        <span className="admin-stat-label">Education</span>
                        <span className="admin-stat-number">2</span>
                    </div>

                    <div className="admin-stat">
                        <span className="admin-stat-label">Certificates</span>
                        <span className="admin-stat-number">1</span>
                    </div>

                </div>

                <div className="admin-grid">

                    {adminSections.map((section) => (
                        <div
                            className="admin-card"
                            key={section.title}
                        >

                            <div className="admin-card-top">

                                <div className="admin-card-icon">
                                    {section.icon}
                                </div>

                                <span className="admin-card-arrow">
                                    ↗
                                </span>

                            </div>

                            <div className="admin-card-content">

                                <h3>
                                    {section.title}
                                </h3>

                                <p>
                                    {section.description}
                                </p>

                                <button
                                    className="admin-manage-button"
                                    onClick={() => {
                                        if (section.title === "Projects") {
                                            window.location.href = "/admin/projects";
                                        }
                                        if (section.title === "Skills") {
                                            window.location.href = "/admin/skills";
                                        }
                                        if (section.title === "Education") {
                                            window.location.href = "/admin/education";
                                        }
                                    }}
                                >
                                    {section.action}
                                    <span>→</span>
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

            </main>

        </div>
    );
}

export default AdminDashboard;
