import React from "react";

function Portfolio() {

    // TODO: Refactor CSS for portfolio - maybe use bootstrap? and add images of project preview

    // set up portfolio links in array or do in separate component?

    return (
        <div>
            <h1 className="small ease-right-expand">Projects</h1>
                    <p className="contact-text">Projects created through Udacity's Nanodegree programs</p>
                    <section className="scroll">
                        <section className="project-container">
                            <section className="project-items">
                
                                {/* <!-- Project Item 1 --> */}
                                <section className="project-display">
                                    <img className="project-image" src="images/projects/memory_game.png" alt="project item"/>
                                    {/* <!-- Remove overlay hidden --> */}
                                    <section className="overlay hidden">
                                        <section className="project-info">
                                            <h4 className="project-title">Memory Game</h4>
                                            <p className="project-description">A Memory Card Game that has a score panel, moves and a timer with a pop up modal.</p>
                                            <p className="project-github">
                                                <a href="https://leandrib.github.io/superhero_memory_game/" className="portfolio-link button">View Project</a>
                                            </p>
                                        </section>
                                    </section>
                                </section>
                
                                {/* <!-- Project Item 2 --> */}
                                <section className="project-display">
                                    <img className="project-image" src="images/projects/movie_website.png" alt="project item"/>
                                    <section className="overlay hidden">
                                        <section className="project-info">
                                            <h4 className="project-title">Movie Website</h4>
                                            <p className="project-description">A website of my favorite moves that showcase movie trailers created through objected oriented programming.</p>
                                            <p className="project-github">
                                                <a href="https://github.com/LeandriB/movie_website" className="portfolio-link button">View Project</a>
                                            </p>
                                        </section>
                                    </section>
                                </section>
                
                                {/* <!-- Project Item 3 --> */}
                                <section className="project-display">
                                    <img className="project-image" src="images/projects/python_quiz.png" alt="project item"/>
                                    <section className="overlay hidden">
                                        <section className="project-info">
                                            <h4 className="project-title">Python Quiz</h4>
                                            <p className="project-description">A short Python quiz that allows you to fill in the blanks through the use of variables and functions.</p>
                                            <p className="project-github">
                                                <a href="https://github.com/LeandriB/quiz" className="portfolio-link button">View Project</a>
                                            </p>
                                        </section>
                                    </section>
                                </section>
                
                                {/* <!-- Project Item 4 --> */}
                                <section className="project-display">
                                    <img className="project-image" src="images/projects/logs_analysis.png" alt="project item"/>
                                    <section className="overlay hidden">
                                        <section className="project-info">
                                            <h4 className="project-title">Logs Analysis</h4>
                                            <p className="project-description">This project is an internal reporting tool that prints out reports based on data in a given database.</p>
                                            <p className="project-github">
                                                <a href="https://github.com/LeandriB/logs_analysis" className="portfolio-link button">View Project</a>
                                            </p>
                                        </section>
                                    </section>
                                </section>
    
                                {/* <!-- Project Item 5 --> */}
                                <section className="project-display">
                                    <img className="project-image" src="images/projects/travel1.png" alt="project item"/>
                                    {/* <!-- Remove overlay hidden --> */}
                                    <section className="overlay hidden">
                                        <section className="project-info">
                                            <h4 className="project-title">Travel App</h4>
                                            <p className="project-description">A Travel App that takes in data from 3 API's and outputs data based on user input.</p>
                                            <p className="project-github">
                                                <a href="https://github.com/LeandriB/travel_app" className="portfolio-link button">View Project</a>
                                            </p>
                                        </section>
                                    </section>
                                </section>
    
                                {/* <!-- Project Item 6 --> */}
                                <section className="project-display">
                                    <img className="project-image" src="images/projects/evaluate_news.png" alt="project item"/>
                                    {/* <!-- Remove overlay hidden --> */}
                                    <section className="overlay hidden">
                                        <section className="project-info">
                                            <h4 className="project-title">Evaluate News</h4>
                                            <p className="project-description">A project that runs a NLP API on an article provided by user.</p>
                                            <p className="project-github">
                                                <a href="https://github.com/LeandriB/evaluate_news_article_nlp" className="portfolio-link button">View Project</a>
                                            </p>
                                        </section>
                                    </section>
                                </section>

                                {/* <!-- Project Item 7 --> */}
                                <section className="project-display">
                                    <img className="project-image" src="images/projects/weather_journal.png" alt="project item"/>
                                    {/* <!-- Remove overlay hidden --> */}
                                    <section className="overlay hidden">
                                        <section className="project-info">
                                            <h4 className="project-title">Weather Journal</h4>
                                            <p className="project-description">An asynchronous web app that uses Web API and user data to dynamically update the UI.</p>
                                            <p className="project-github">
                                                <a href="https://github.com/LeandriB/weather_journal_app" className="portfolio-link button">View Project</a>
                                            </p>
                                        </section>
                                    </section>
                                </section>

                                {/* <!-- Project Item 8 --> */}
                                <section className="project-display">
                                    <img className="project-image" src="images/projects/landing_page.png" alt="project item"/>
                                    {/* <!-- Remove overlay hidden --> */}
                                    <section className="overlay hidden">
                                        <section className="project-info">
                                            <h4 className="project-title">Landing Page</h4>
                                            <p className="project-description">A static version of a landing page turned into an interactive version.</p>
                                            <p className="project-github">
                                                <a href="https://github.com/LeandriB/landing_page" className="portfolio-link button">View Project</a>
                                            </p>
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
        </div>
    )
}

export default Portfolio;