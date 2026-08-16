import { motion } from "motion/react";
import workspaceIllustration from "../assets/about-workspace.jpg";

function About() {
    return (
        <section id="about" className="section about-section">
            <div className="section-container">

                <motion.p
                    className="section-label"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    ABOUT ME
                </motion.p>

                {/* Top: headline + illustration side by side */}
                <div className="about-top">

                    <motion.div
                        className="about-headline"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                    >
                        <h2 className="section-heading">
                            A developer who enjoys
                            <span> building useful things.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="about-illustration-wrap"
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
                    >
                        <img
                            src={workspaceIllustration}
                            alt="Developer workspace with code and technology elements"
                            className="about-illustration"
                        />
                    </motion.div>

                </div>

                {/* Bottom: bio text + stat cards */}
                <div className="about-bottom">

                    <motion.p
                        className="about-bio"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        I'm Vedant, a software developer focused on building
                        reliable full-stack applications. I work across the
                        entire stack — designing databases and REST APIs with
                        Java and Spring Boot, and building responsive interfaces
                        with React.
                    </motion.p>

                    <motion.div
                        className="about-stats"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.28 }}
                    >
                        <div className="about-stat">
                            <strong>Full Stack</strong>
                            <span>Web Development</span>
                        </div>

                        <div className="about-stat">
                            <strong>5+</strong>
                            <span>Projects Built</span>
                        </div>

                        <div className="about-stat">
                            <strong>Backend</strong>
                            <span>APIs & Databases</span>
                        </div>

                        <div className="about-stat">
                            <strong>Mobile</strong>
                            <span>Android Dev</span>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default About;