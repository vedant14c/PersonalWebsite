import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { getProjects } from "../api/api";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const response = await getProjects();
                setProjects(response.data);
            } catch (err) {
                console.error(err);
                setError("Unable to load projects.");
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    const featuredProject = projects.find(
        (project) => project.is_featured
    );

    const otherProjects = projects.filter(
        (project) => !project.is_featured
    );

    return (
        <section id="projects" className="section projects-section">
            <div className="section-container">

                {/* Heading */}

                <motion.div
                    className="projects-intro-header"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <p className="section-label">
                            SELECTED WORK
                        </p>

                        <h2 className="projects-main-heading">
                            Things I've
                            <span>built.</span>
                        </h2>
                    </div>

                    <p className="projects-intro">
                        A selection of applications and systems I've
                        developed across web, backend, mobile, and
                        database technologies.
                    </p>
                </motion.div>


                {/* Loading */}
                {loading && (
                    <div className="section-status">
                        <span className="status-dot"></span>
                        Loading projects...
                    </div>
                )}

                {/* Error */}
                {error && !loading && (
                    <div className="section-status section-status-error">
                        <span>Unable to load projects.</span>
                        <small>Please try again later.</small>
                    </div>
                )}

                {/* Empty */}
                {!loading && !error && projects.length === 0 && (
                    <div className="section-status">
                        No projects available at the moment.
                    </div>
                )}

                {/* Projects */}
                {!loading && !error && projects.length > 0 && (
                    <>

                        {/* =========================================
                            FEATURED PROJECT
                        ========================================= */}

                        {featuredProject && (
                            <motion.article
                                className="featured-project"
                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true,
                                    margin: "-80px"
                                }}
                                transition={{
                                    duration: 0.7
                                }}
                            >

                                <div className="featured-project-header">

                                    <div className="featured-project-index">
                                        01
                                    </div>

                                    <div className="featured-project-label">
                                        FEATURED PROJECT
                                    </div>

                                </div>


                                {/* Image */}

                                <motion.div
                                    className="featured-project-image"
                                    whileHover={{
                                        scale: 1.01
                                    }}
                                    transition={{
                                        duration: 0.4
                                    }}
                                >
                                    <img
                                        src="/projects/spacehub.png"
                                        alt="SpaceHub rental management platform interface"
                                    />

                                    <div className="featured-image-caption">
                                        <span>
                                            SPACEHUB / WEB PLATFORM
                                        </span>

                                        <span>
                                            2026
                                        </span>
                                    </div>
                                </motion.div>


                                {/* Information */}

                                <div className="featured-project-info">

                                    <div className="featured-project-title">

                                        <p className="project-kicker">
                                            FULL-STACK RENTAL PLATFORM
                                        </p>

                                        <h3>
                                            {featuredProject.title}
                                        </h3>

                                        <p className="featured-project-description">
                                            {featuredProject.description}
                                        </p>

                                    </div>


                                    <div className="featured-project-details">

                                        <div className="project-detail">
                                            <span>ROLE</span>
                                            <strong>
                                                Full Stack Developer
                                            </strong>
                                        </div>

                                        <div className="project-detail">
                                            <span>STACK</span>

                                            <div className="project-detail-stack">
                                                {Array.isArray(
                                                    featuredProject.tech_stack
                                                ) &&
                                                    featuredProject.tech_stack.map(
                                                        (tech) => (
                                                            <span key={tech}>
                                                                {tech}
                                                            </span>
                                                        )
                                                    )}
                                            </div>
                                        </div>

                                    </div>

                                </div>


                                {/* Footer */}

                                <div className="featured-project-footer">

                                    <span className="project-type">
                                        Web · Backend · Mobile
                                    </span>

                                    <div className="project-actions">

                                        {featuredProject.github_url && (
                                            <a
                                                href={
                                                    featuredProject.github_url
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                GitHub
                                                <span>↗</span>
                                            </a>
                                        )}

                                        {featuredProject.live_url && (
                                            <a
                                                href={
                                                    featuredProject.live_url
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-primary-link"
                                            >
                                                View Project
                                                <span>↗</span>
                                            </a>
                                        )}

                                    </div>

                                </div>

                            </motion.article>
                        )}


                        {/* =========================================
                            OTHER PROJECTS
                        ========================================= */}

                        {otherProjects.length > 0 && (
                            <div className="other-projects">

                                <div className="other-projects-heading">
                                    <span>
                                        MORE WORK
                                    </span>

                                    <span>
                                        {String(
                                            otherProjects.length
                                        ).padStart(2, "0")}{" "}
                                        PROJECTS
                                    </span>
                                </div>


                                <div className="other-projects-list">

                                    {otherProjects.map(
                                        (project, index) => (

                                            <motion.article
                                                className="project-list-item"
                                                key={project.id}
                                                initial={{
                                                    opacity: 0,
                                                    y: 25
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0
                                                }}
                                                viewport={{
                                                    once: true
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay:
                                                        index * 0.08
                                                }}
                                            >

                                                <div className="project-list-number">
                                                    {String(
                                                        project.display_order
                                                    ).padStart(2, "0")}
                                                </div>


                                                <div className="project-list-main">

                                                    <div>
                                                        <p>
                                                            PROJECT
                                                        </p>

                                                        <h3>
                                                            {
                                                                project.title
                                                            }
                                                        </h3>
                                                    </div>

                                                    <span className="project-list-arrow">
                                                        ↗
                                                    </span>

                                                </div>


                                                <p className="project-list-description">
                                                    {
                                                        project.description
                                                    }
                                                </p>


                                                {Array.isArray(
                                                    project.tech_stack
                                                ) && (
                                                    <div className="project-list-stack">
                                                        {project.tech_stack.map(
                                                            (tech) => (
                                                                <span
                                                                    key={
                                                                        tech
                                                                    }
                                                                >
                                                                    {tech}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                )}


                                                <div className="project-list-links">

                                                    {project.github_url && (
                                                        <a
                                                            href={
                                                                project.github_url
                                                            }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            GitHub ↗
                                                        </a>
                                                    )}

                                                    {project.live_url && (
                                                        <a
                                                            href={
                                                                project.live_url
                                                            }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            Live Demo ↗
                                                        </a>
                                                    )}

                                                </div>

                                            </motion.article>
                                        )
                                    )}

                                </div>

                            </div>
                        )}

                    </>
                )}

            </div>
        </section>
    );
}

export default Projects;