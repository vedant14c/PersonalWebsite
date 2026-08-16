import { useState } from "react";
import { motion } from "motion/react";
import { sendMessage } from "../api/api";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState({
        type: "",
        message: ""
    });
    const [sending, setSending] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));

        // Clear error while user is editing
        if (status.type === "error") {
            setStatus({ type: "", message: "" });
        }
    };

    const validateForm = () => {
        const name = formData.name.trim();
        const email = formData.email.trim();
        const subject = formData.subject.trim();
        const message = formData.message.trim();

        if (!name) {
            return "Please enter your name.";
        }

        if (!email) {
            return "Please enter your email.";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return "Please enter a valid email address.";
        }

        if (!subject) {
            return "Please enter a subject.";
        }

        if (!message) {
            return "Please enter your message.";
        }

        if (message.length < 10) {
            return "Message must be at least 10 characters.";
        }

        if (message.length > 2000) {
            return "Message cannot exceed 2000 characters.";
        }

        return null;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (sending) {
            return;
        }

        const validationError = validateForm();

        if (validationError) {
            setStatus({
                type: "error",
                message: validationError
            });
            return;
        }

        setSending(true);
        setStatus({ type: "", message: "" });

        try {
            await sendMessage({
                name: formData.name.trim(),
                email: formData.email.trim(),
                subject: formData.subject.trim(),
                message: formData.message.trim()
            });

            setStatus({
                type: "success",
                message: "Message sent successfully!"
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

        } catch (error) {
            console.error("Contact form error:", error);

            setStatus({
                type: "error",
                message:
                    error.message ||
                    "Unable to send your message. Please try again."
            });

        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="section-container">

                <motion.p
                    className="section-label"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    CONTACT
                </motion.p>

                <motion.h2
                    className="section-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.08 }}
                >
                    Let's work together.
                </motion.h2>

                <motion.p
                    className="section-text"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.16 }}
                >
                    Have a project, opportunity, or just want to say hello?
                    Send me a message.
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.26 }}
                    className="contact-form"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <div className="contact-row">
                        <div>
                            <label htmlFor="contact-name" className="sr-only">
                                Your name
                            </label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                maxLength="100"
                                disabled={sending}
                            />
                        </div>

                        <div>
                            <label htmlFor="contact-email" className="sr-only">
                                Your email
                            </label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="Your email"
                                value={formData.email}
                                onChange={handleChange}
                                maxLength="150"
                                disabled={sending}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="contact-subject" className="sr-only">
                            Subject
                        </label>
                        <input
                            id="contact-subject"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            maxLength="200"
                            disabled={sending}
                        />
                    </div>

                    <div>
                        <label htmlFor="contact-message" className="sr-only">
                            Your message
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            placeholder="Your message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            maxLength="2000"
                            disabled={sending}
                        />
                    </div>

                    <button
                        type="submit"
                        className="primary-button"
                        disabled={sending}
                    >
                        {sending ? "Sending..." : "Send Message"}
                    </button>

                    {status.message && (
                        <p
                            className={`contact-status contact-status-${status.type}`}
                            role="status"
                            aria-live="polite"
                        >
                            {status.message}
                        </p>
                    )}

                </motion.form>

            </div>
        </section>
    );
}

export default Contact;