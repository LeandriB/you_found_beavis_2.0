import React, { useState } from "react";
import About from "../About";
import Navigation from "../Navigation";
// TODO: Import Portfolio
// TODO: Import Contact
// TODO: Import Resume

function Header() {
    // TODO: Review naming conventions for page/page change handler 
    const [currentPage, togglePage] = useState("About");

    const getPage = () => {
        switch (currentPage) {
        case "About":
            return <About />;
            // TODO: Set up switch case for other pages

        default:
            return <About />;
        }
    };

    return(
        <header>
            <Navigation
                currentPage={currentPage}
                togglePage={togglePage}
            />
            <main>
                <div>{getPage(currentPage)}</div>
            </main>
        </header>
    )
}

export default Header;