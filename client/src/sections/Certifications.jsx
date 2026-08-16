import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { getCertifications } from "../api/api";

function Certifications() {
    const [certifications, setCertifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadCertifications = async () => {
            try {
                const response = await getCertifications();
                setCertifications(response.data);
            } catch (err) {
                console.error("Failed to load certifications:", err);
                setError("Unable to load certifications.");
            } finally {
                setLoading(false);
            }
        };

        loadCertifications();
    }, []);

    return (
        <section id="certifications" className="section certifications-section">
            <div className="section-container">

                <motion.p
                    className="section-label"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    CERTIFICATION
                </motion.p>

                <motion.h2
                    className="section-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.08 }}
                >
                    Certifications
                </motion.h2>

                {loading ? (
                    <div className="section-status">
                        <span className="status-dot"></span>
                        Loading certifications...
                    </div>
                ) : error ? (
                    <div className="section-status section-status-error">
                        <span>Unable to load certifications.</span>
                        <small>Please try again later.</small>
                    </div>
                ) : certifications.length === 0 ? (
                    <div className="section-status">
                        No certifications available at the moment.
                    </div>
                ) : (
                    <div className="certifications-list">
                        {certifications.map((certification, index) => (
                            <motion.article
                                className="certification-card"
                                key={certification.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: 0.12 + index * 0.08,
                                }}
                            >
                                {/* Index */}
                                <div className="certification-number">
                                    {String(
                                        certification.display_order ?? index + 1
                                    ).padStart(2, "0")}
                                </div>

                                {/* Marker icon */}
                                <div className="certification-marker">
                                    <span>✓</span>
                                </div>

                                {/* Main information */}
                                <div className="certification-content">
                                    <p className="certification-label">
                                        CREDENTIAL
                                    </p>

                                    <h3>
                                        {certification.name}
                                    </h3>

                                    <div className="certification-meta">
                                        {certification.issuer && (
                                            <span>
                                                {certification.issuer}
                                            </span>
                                        )}

                                        {certification.issue_date && (
                                            <span>
                                                {new Date(
                                                    certification.issue_date
                                                ).getFullYear()}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Credential link */}
                                {certification.credential_url && (
                                    <a
                                        className="certification-link"
                                        href={certification.credential_url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span>View Credential</span>
                                        <span className="certification-arrow">↗</span>
                                    </a>
                                )}
                            </motion.article>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}

export default Certifications;