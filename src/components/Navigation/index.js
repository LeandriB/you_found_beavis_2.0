import React from "react";

function Navigation() {

    const categories = [
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

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <nav>
            <ul className="flex-row">
                {categories.map((category) => (
                <li
                    className="mx-1"
                    key={category.name}
                >
                    <span onClick={categorySelected} >
                    {category.name}
                    </span>
                </li>
                ))}
            </ul>
        </nav>
        </header>
    )
}

export default Navigation;