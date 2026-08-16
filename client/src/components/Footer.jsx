import { profile } from "../config/profile";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <h3>Vedant<span>.</span></h3>

                    <p>
                        Software Developer building practical
                        full-stack solutions.
                    </p>
                </div>

                <div className="footer-links">
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href={`mailto:${profile.email}`}>
                        Email
                    </a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © {year} {profile.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;