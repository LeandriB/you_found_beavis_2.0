import React from "react";

function About() {
    return (
        <div>
            <h1>
                <span className="small">Hello,</span>
                <span className="ease-right-expand">
                    <span>I'm <span className="color">Leandri.</span></span>
                </span>
            </h1>
            <p className="about-text">
                I'm a self-taught Front End Web Developer with a background in Fashion Design.
                I am passionate about learning and enjoy the challenges that come 
                with creating new applications.
            </p> 
            <p className="about-text">
                My passion for development comes from my love for art and design. I fell in love with
                programming through backend architecture and quickly realized that I want to know more about the frontend.
            </p>
            <p className="about-text">
                When I am not improving my projects or solving coding problems, you can find me outdoors, hanging out with my dogs, 
                at the gym or, in the kitchen cooking up a storm. 
            </p>
        </div>
    )
}

export default About