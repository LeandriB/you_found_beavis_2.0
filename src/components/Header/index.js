import React, { useState } from "react";
import About from "../About";
import Navigation from "../Navigation";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Header() {
    // TODO: Review naming conventions for page/page change handler 
    const [pageSelected, togglePage] = useState("About");

    const getPage = () => {
        switch (pageSelected) {
        case "About":
            return <About />;
        case "Portfolio":
            return <Portfolio/>;
        case "Contact":
            return <Contact/>;
        case "Resume":
            return <Resume/>;
        default:
            return <About />;
        }
    };

    return(
        <header>
            <Navigation
                pageSelected={pageSelected}
                togglePage={togglePage}
            />
            <main>
                <div>{getPage(pageSelected)}</div>
            </main>
        </header>
    )
}

export default Header;