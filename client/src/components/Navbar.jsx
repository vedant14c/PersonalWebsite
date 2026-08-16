import { useEffect, useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const sections = [
            "about",
            "skills",
            "projects",
            "education",
            "certifications",
            "contact"
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                root: null,
                threshold: [0.15, 0.3, 0.5, 0.7],
                rootMargin: "-76px 0px -35% 0px"
            }
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);

            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });

        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <button
                    className="logo"
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                        setMenuOpen(false);
                    }}
                >
                    Vedant<span>.</span>
                </button>

                {/* Desktop navigation */}
                <div className="nav-links">
                    <button
                        className={activeSection === "about" ? "active" : ""}
                        onClick={() => scrollToSection("about")}
                    >
                        About
                    </button>

                    <button
                        className={activeSection === "skills" ? "active" : ""}
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </button>

                    <button
                        className={activeSection === "projects" ? "active" : ""}
                        onClick={() => scrollToSection("projects")}
                    >
                        Projects
                    </button>

                    <button
                        className={activeSection === "education" ? "active" : ""}
                        onClick={() => scrollToSection("education")}
                    >
                        Education
                    </button>

                    <button
                        className={activeSection === "certifications" ? "active" : ""}
                        onClick={() => scrollToSection("certifications")}
                    >
                        Certifications
                    </button>

                    <button
                        className={activeSection === "contact" ? "active" : ""}
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact
                    </button>
                </div>

                <button
                    className="nav-contact"
                    onClick={() => scrollToSection("contact")}
                >
                    Let's Talk
                </button>

                {/* Mobile menu button */}
                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>

            {/* Mobile navigation */}
            {menuOpen && (
                <div
                    id="mobile-navigation"
                    className="mobile-menu"
                >

                    <button onClick={() => scrollToSection("about")}>
                        About
                    </button>

                    <button onClick={() => scrollToSection("skills")}>
                        Skills
                    </button>

                    <button onClick={() => scrollToSection("projects")}>
                        Projects
                    </button>

                    <button onClick={() => scrollToSection("education")}>
                        Education
                    </button>

                    <button onClick={() => scrollToSection("certifications")}>
                        Certifications
                    </button>

                    <button onClick={() => scrollToSection("contact")}>
                        Contact
                    </button>

                </div>
            )}
        </nav>
    );
}

export default Navbar;