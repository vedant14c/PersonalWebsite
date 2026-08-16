import { motion } from "motion/react";
import { profile } from "../config/profile";

function Resume() {
    return (
        <section className="resume-section">
            <motion.div
                className="resume-container"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div>
                    <p className="resume-label">
                        WANT TO KNOW MORE?
                    </p>

                    <h2>
                        Take a look at my resume.
                    </h2>
                </div>

                <motion.a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="resume-button"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
                >
                    View Resume ↗
                </motion.a>
            </motion.div>
        </section>
    );
}

export default Resume;