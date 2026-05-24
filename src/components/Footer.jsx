const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-card">

                <h2 className="footer-logo">
                    Manisha<span className="accent-text">.dev</span>
                </h2>

                <p className="footer-text">
                    Full Stack Developer Learner passionate about creating
                    modern and responsive web experiences.
                </p>

                <div className="social-icons">
                    <a href="#" className="social-link">
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href="#" className="social-link">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>

                    <a href="#" className="social-link">
                        <i className="fa-brands fa-github"></i>
                    </a>

                    <a href="#" className="social-link">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                </div>

                <p className="copyright-text">
                    © {currentYear}
                    <span className="accent-text"> Manisha</span>.
                    All rights reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;