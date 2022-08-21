import React from "react";

function Footer() {
    return (
        <footer>
            <section className="social-container">
                <a href="https://github.com/LeandriB">
                    <img src="/assets/icons/github.png" alt="Github" className="social-icons"/>
                </a>
                <a href="https://www.instagram.com/leandrikuyk/">
                    <img src="/assets/icons/instagram.png" alt="Instagram" className="social-icons"/>
                </a>
                <a href="https://www.linkedin.com/in/leandrib/">
                    <img src="/assets/icons/linkedin.png" alt="Linkedin" className="social-icons"/>
                </a>
            </section>
        </footer>
    )
}

export default Footer;