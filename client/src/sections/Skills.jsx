import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { getSkills } from "../api/api";

const fadeUp = (delay = 0) => ({
    initial: {
        opacity: 0,
        y: 20
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    viewport: {
        once: true
    },
    transition: {
        duration: 0.55,
        ease: "easeOut",
        delay
    }
});

function Skills() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadSkills = async () => {
            try {
                const response = await getSkills();
                setSkills(response.data);
            } catch (err) {
                console.error("Failed to load skills:", err);
                setError("Unable to load skills.");
            } finally {
                setLoading(false);
            }
        };

        loadSkills();
    }, []);

    const groupedSkills = skills.reduce((groups, skill) => {
        if (!groups[skill.category]) {
            groups[skill.category] = [];
        }
        groups[skill.category].push(skill);
        return groups;
    }, {});

    const categories = Object.entries(groupedSkills);

    return (
        <section id="skills" className="section skills-section">
            <div className="section-container">

                <motion.p
                    className="section-label"
                    {...fadeUp(0)}
                >
                    WHAT I WORK WITH
                </motion.p>

                <motion.h2
                    className="section-heading"
                    {...fadeUp(0.08)}
                >
                    Skills &amp; Technologies
                </motion.h2>

                {loading && (
                    <div className="section-status">
                        <span className="status-dot"></span>
                        Loading skills...
                    </div>
                )}

                {error && !loading && (
                    <div className="section-status section-status-error">
                        <span>Unable to load skills.</span>
                        <small>Please try again later.</small>
                    </div>
                )}

                {!loading && !error && categories.length === 0 && (
                    <div className="section-status">
                        No skills available at the moment.
                    </div>
                )}

                {!loading && !error && categories.length > 0 && (
                    <div className="skills-bento">
                        {categories.map(([category, categorySkills], index) => (
                            <motion.article
                                className={`skill-category ${
                                    categorySkills.length >= 6 ? "skill-category--wide" : ""
                                } ${index === 0 ? "skill-category--featured" : ""}`}
                                key={category}
                                {...fadeUp(0.12 + index * 0.08)}
                            >
                                <div className="skill-category-header">
                                    <span className="skill-category-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div>
                                        <p className="skill-category-label">
                                            TECHNICAL AREA
                                        </p>

                                        <h3>{category}</h3>
                                    </div>
                                </div>

                                <div className="skill-list">
                                    {categorySkills.map((skill, skillIndex) => (
                                        <motion.span
                                            className="skill-item"
                                            key={skill.id}
                                            initial={{ opacity: 0, y: 8 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeOut",
                                                delay: 0.18 + index * 0.08 + skillIndex * 0.04
                                            }}
                                        >
                                            <span className="skill-dot"></span>
                                            {skill.name}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}

export default Skills;