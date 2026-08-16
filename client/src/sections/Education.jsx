import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { getEducation } from "../api/api";

function Education() {
    const [education, setEducation] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadEducation = async () => {
            try {
                const response = await getEducation();
                setEducation(response.data);
            } catch (err) {
                console.error("Failed to load education:", err);
                setError("Unable to load education records.");
            } finally {
                setLoading(false);
            }
        };

        loadEducation();
    }, []);

    return (
        <section id="education" className="section education-section">
            <div className="section-container">

                <motion.p
                    className="section-label"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    EDUCATION
                </motion.p>

                <motion.h2
                    className="section-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.08 }}
                >
                    Academic Journey
                </motion.h2>

                {loading ? (
                    <div className="section-status">
                        <span className="status-dot"></span>
                        Loading education...
                    </div>
                ) : error ? (
                    <div className="section-status section-status-error">
                        <span>Unable to load education records.</span>
                        <small>Please try again later.</small>
                    </div>
                ) : education.length === 0 ? (
                    <div className="section-status">
                        No education records available at the moment.
                    </div>
                ) : (
                    <div className="education-list">
                        {education.map((item, index) => (
                            <motion.article
                                className="education-card"
                                key={item.id}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.55,
                                    ease: "easeOut",
                                    delay: 0.14 + index * 0.1,
                                }}
                            >
                                <div className="education-year">
                                    {new Date(item.end_date).getFullYear()}
                                </div>

                                <div className="education-content">
                                    <h3>{item.degree}</h3>

                                    <p className="education-institution">
                                        {item.institution}
                                    </p>

                                    <p className="education-description">
                                        {item.description}
                                    </p>

                                    <span className="education-percentage">
                                        {item.percentage}%
                                    </span>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}

export default Education;