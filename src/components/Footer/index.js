import React from "react";

function Footer() {
    return (
        <footer>
            <section className="social-container">
                <a href="https://github.com/LeandriB">
                    <img src="assets/images/github.png" alt="Github" className="social-icons"/>
                </a>
                <a href="https://www.instagram.com/leandrikuyk/">
                    <img src="assets/images/instagram.png" alt="Instagram" className="social-icons"/>
                </a>
                <a href="https://www.linkedin.com/in/leandrib/">
                    <img src="assets/images/linkedin.png" alt="Linkedin" className="social-icons"/>
                </a>
            </section>
        </footer>
    )
}

export default Footer;