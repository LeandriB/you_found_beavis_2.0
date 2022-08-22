import React from "react";

function Portfolio(props) {

    // TODO: Refactor CSS for portfolio - maybe use bootstrap? and add images of project preview

    const project = [
        {
            id: 0,
            title: "Memory Game",
            image: "/images/memory_game.png",
            description: "A Memory Card Game that has a score panel, moves and a timer with a pop up modal.",
            deployed: "https://leandrib.github.io/superhero_memory_game/",
            github: "",
        },
        {
            id: 1,
            title: "Movie Website",
            image: "/images/movie_website.png",
            description: "A website of my favorite moves that showcase movie trailers created through objected oriented programming.",
            deployed: "",
            github: "",
        },
        {
            id: 2,
            title: "ListenIn",
            image: "/images/projects/memory_game.png",
            description: "A Memory Card Game that has a score panel, moves and a timer with a pop up modal.",
            deployed: "https://listeninlistenin.herokuapp.com/",
            github: "",
        },
        {
            id: 3,
            title: "Casting Director",
            image: "/images/projects/memory_game.png",
            description: "A Memory Card Game that has a score panel, moves and a timer with a pop up modal.",
            deployed: "https://nickrearl.github.io/podcast-project/",
            github: "",
        },
        {
            id: 4,
            title: "Note Taker",
            image: "/images/projects/note_taker.png",
            description: "A Memory Card Game that has a score panel, moves and a timer with a pop up modal.",
            deployed: "https://shielded-dawn-41143.herokuapp.com/",
            github: "",
        },
        {
            id: 5,
            title: "Run Buddy",
            image: "/images/projects/memory_game.png",
            description: "A Memory Card Game that has a score panel, moves and a timer with a pop up modal.",
            deployed: "https://leandrib.github.io/run_buddy/",
            github: "",
        },
        {
            id: 6,
            title: "Work Day Scheduler",
            image: "/images/projects/memory_game.png",
            description: "A Memory Card Game that has a score panel, moves and a timer with a pop up modal.",
            deployed: "https://leandrib.github.io/work_day_scheduler/",
            github: "",
        },
    ]

    return (
        <div>
            <h1 className="small ease-right-expand">Projects</h1>
                    <p className="contact-text">Projects created through Udacity's Nanodegree programs</p>
                    <section className="scroll">
                        <section className="project-container">
                            <section className="project-items">
                
                                {/* <!-- Project Items--> */}
                                {props.projects.map((project) => (
                                <section className="project-display">
                                    <img className="project-image" src={project.image} alt="project item"/>
                                    {/* <!-- Remove overlay hidden --> */}
                                    <section className="overlay hidden">
                                        <section className="project-info">
                                            <h4 className="project-title" key={project.id}>{project.title}</h4>
                                            <p className="project-description">{project.description}</p>
                                            <p className="project-github">
                                                <a href={project.deployed} className="portfolio-link button">View Project</a>
                                                {/* TODO: add github link */}
                                            </p>
                                        </section>
                                    </section>
                                </section>
                                ))}
                            </section>
                        </section>
                    </section>
        </div>
    )
}

export default Portfolio;