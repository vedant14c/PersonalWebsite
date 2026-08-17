import { motion, useMotionValue, useSpring } from "motion/react";
import { profile } from "../config/profile";

function Hero() {

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth"
        });
    };

    const glowX = useMotionValue(0);
    const glowY = useMotionValue(0);
    const springX = useSpring(glowX, { stiffness: 150, damping: 20 });
    const springY = useSpring(glowY, { stiffness: 150, damping: 20 });

    const handleVisualMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        glowX.set(event.clientX - rect.left);
        glowY.set(event.clientY - rect.top);
    };

    return (
        <section className="hero">

            <div className="hero-grid" />
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />

            <div className="hero-container">

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >

                    <motion.p
                        className="hero-eyebrow"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                    >
                        HELLO, I'M
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.7 }}
                    >
                        Vedant
                        <span>Chaudhari</span>
                    </motion.h1>

                    <motion.div
                        className="hero-role"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45, duration: 0.7 }}
                    >
                        <span className="hero-role-line" />
                        <span>Software Developer</span>
                    </motion.div>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55, duration: 0.7 }}
                    >
                        I build modern web applications and full-stack
                        systems with a focus on clean design, reliable
                        backend architecture, and meaningful user
                        experiences.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        <button
                            className="primary-button hero-work-button"
                            onClick={scrollToProjects}
                        >
                            View My Work
                            <span>↗</span>
                        </button>

                        <a
                            href={profile.resume}
                            target="_blank"
                            rel="noreferrer"
                            className="secondary-button"
                        >
                            View Resume
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        <a href={profile.github} target="_blank" rel="noreferrer">
                            GitHub ↗
                        </a>

                        <a href={profile.linkedin} target="_blank" rel="noreferrer">
                            LinkedIn ↗
                        </a>

                        <a href={`mailto:${profile.email}`}>
                            Email ↗
                        </a>
                    </motion.div>

                </motion.div>


                {/* Right side visual — phone mockup + cursor glow */}
                <motion.div
                    className="hero-visual"
                    onMouseMove={handleVisualMouseMove}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35, duration: 1, ease: "easeOut" }}
                >

                    <motion.div
                        className="hero-cursor-glow"
                        style={{ left: springX, top: springY }}
                    />

                    <motion.div
                        className="hero-phone"
                        animate={{ y: [0, -14, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="hero-phone-notch" />
                        <div className="hero-phone-screen">
                            <img
                                src="/projects/spacehubMobile.png"
                                alt="SpaceHub app running on a phone"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-floating-tag tag-one"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        React
                    </motion.div>

                    <motion.div
                        className="hero-floating-tag tag-two"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Spring Boot
                    </motion.div>

                    <motion.div
                        className="hero-floating-tag tag-three"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        MySQL
                    </motion.div>

                </motion.div>

            </div>

            <div className="hero-scroll">
                <span>SCROLL TO EXPLORE</span>
                <div className="hero-scroll-line" />
            </div>

        </section>
    );
}

export default Hero;