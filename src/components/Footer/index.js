import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <section className="social-container content has-text-centered">
                <a href="tel:5555555555">
                    <img src="assets/icons/smartphone.png" alt="Smartphone" className="social-icons grow"/>
                </a>
                <a href="mailto:leandrikuyk@gmail.com">
                    <img src="assets/icons/arroba.png" alt="Email" className="social-icons grow"/>
                </a>
                <a href="https://github.com/LeandriB">
                    <img src="assets/icons/github.png" alt="Github" className="social-icons grow"/>
                </a>
                <a href="https://www.instagram.com/leandrikuyk/">
                    <img src="assets/icons/instagram.png" alt="Instagram" className="social-icons grow"/>
                </a>
                <a href="https://www.linkedin.com/in/leandrib/">
                    <img src="assets/icons/linkedin.png" alt="Linkedin" className="social-icons grow"/>
                </a>
                
            </section>
        </footer>
    )
}

export default Footer;