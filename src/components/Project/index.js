import React from "react";

function Project(props) {
    return (
            <section className="scroll">
                <section className="project-container">
                    <section className="project-items">
        
                        {/* <!-- Project Items--> */}
                        {props.projects.map((project) => (
                        <section className="project-display" key={project.id}>
                            <img className="project-image" src={project.image} alt="project item"/>
                            {/* <!-- Remove overlay hidden --> */}
                            <section className="overlay hidden">
                                <section className="project-info">
                                    <h4 className="project-title">{project.title}</h4>
                                    <p className="project-description">{project.description}</p>
                                    <p className="project-github">
                                        <a href={project.deployed} className="portfolio-link button">View Project</a>
                                        {/* TODO: add github */}
                                        <a href={project.github}>
                                            <img className="social-icons" src="/assets/icons/github.png" alt="Github"/>
                                        </a>
                                    </p>
                                </section>
                            </section>
                        </section>
                        ))}
                    </section>
                </section>
            </section>
    )
}

export default Project;