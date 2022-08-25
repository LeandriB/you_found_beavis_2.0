import React from "react";
import Project from "../Project";

function Portfolio() {

    const projects = [
        {
            id: 0,
            title: "Memory Game",
            image: "assets/images/memory_game.png",
            description: "A Memory Card Game that has a score panel, moves and a timer with a pop up modal.",
            deployed: "https://leandrib.github.io/superhero_memory_game/",
            github: "https://github.com/LeandriB/superhero_memory_game",
        },
        {      
            id: 1,
            title: "Work Day Scheduler",
            image: "assets/images/workday.png",
            description: "A place where you can keep track of the things that you have to do for the day.",
            deployed: "https://leandrib.github.io/work_day_scheduler/",
            github: "https://github.com/LeandriB/work_day_scheduler",
        },
        {
            id: 2,
            title: "ListenIn",
            image: "assets/images/listenin.jpg",
            description: "An application for listening, sharing music and connecting with others.",
            deployed: "https://listeninlistenin.herokuapp.com/",
            github: "https://github.com/nickrearl/ListenIn",
        },
        {
            id: 3,
            title: "Casting Director",
            image: "assets/images/podcast.png",
            description: "An application where you can look for podcasts and make a favorites list",
            deployed: "https://nickrearl.github.io/podcast-project/",
            github: "https://github.com/nickrearl/podcast-project",
        },
        {
            id: 4,
            title: "Note Taker",
            image: "assets/images/note_taker.png",
            description: "A note taking application where you can take notes and store data to look back at later",
            deployed: "https://shielded-dawn-41143.herokuapp.com/",
            github: "https://github.com/LeandriB/note_taker",
        },
        {
            id: 5,
            title: "Run Buddy",
            image: "assets/images/run-buddy.jpg",
            description: "An application where you can find a coach to assist with training",
            deployed: "https://leandrib.github.io/run_buddy/",
            github: "https://github.com/LeandriB/run_buddy",
        },
    ]

    return (
        <section>
            <h1 className="small ease-right-expand categories">Projects</h1>
                <Project projects={projects}/>
        </section>
    )
}

export default Portfolio;