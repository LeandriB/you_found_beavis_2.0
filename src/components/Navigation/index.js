import React from "react";

function Navigation() {

    const pages = [
        {
            name: "About Me",
            description:
                "Introduction about me, Leandri B",
        },
        { name: "Portfolio", description: "Collection of my dev journey" },
        { name: "Contact", description: "Let's connect" },
        {
            name: "Resume",
            description: "My Professional experience",
        },
    ]

    function pageSelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <nav>
            <ul className="flex-row">
                {pages.map((page) => (
                <li
                    className="mx-1"
                    key={page.name}
                >
                    <span onClick={pageSelected} >
                    {page.name}
                    </span>
                </li>
                ))}
            </ul>
        </nav>
        </header>
    )
}

export default Navigation;