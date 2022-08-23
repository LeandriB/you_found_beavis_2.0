import React from "react";

function Resume() {
    return (
        <section className="container">
            <h1 className="small ease-right-expand">Skills</h1>
            <br/>
            <section className="row columns  justify-content-center">
                <span className="column col-5">
                    <ul className="card-body">
                        <li className="card-text">HTML, CSS, JavaScript</li>
                        <li className="card-text">React, Angular, TypeScript</li>
                        <li className="card-text">SQL, C#, Visual Basic</li>
                        <li className="card-text">.NET development</li>
                        <li className="card-text">Version Control</li>
                    </ul>
                </span>
                <span className="column col-5">
                    <button className="download">
                        {/* TODO: add link to pdf to download */}
                        <a href="/assets/images/resume.pdf" download>Download Resume</a>
                    </button>
                </span>
            </section>
        </section>
    )
}

export default Resume;