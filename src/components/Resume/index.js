import React from "react";

function Resume() {
    return (
        <div>
            <p>Skills</p>
            <br/>
            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React, Angular, TypeScript</li>
                <li>SQL, C#, Visual Basic</li>
                <li>.NET development</li>
                <li>Version Control</li>
            </ul>
            <button>
                {/* TODO: add link to pdf to download */}
                <a href="" download>Download Resume</a>
            </button>
        </div>
    )
}

export default Resume;