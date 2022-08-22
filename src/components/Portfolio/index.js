import React from "react";
import Project from "../Project";

function Portfolio() {

    const projects = [
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
            title: "Work Day Scheduler",
            image: "/images/projects/memory_game.png",
            description: "A Memory Card Game that has a score panel, moves and a timer with a pop up modal.",
            deployed: "https://leandrib.github.io/work_day_scheduler/",
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
    ]

    return (
        <section>
            <h1 className="small ease-right-expand">Projects</h1>
                <Project projects={projects}/>
        </section>
    )
}

export default Portfolio;