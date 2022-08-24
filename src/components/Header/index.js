import React, { useState } from "react";
import About from "../About";
import Navigation from "../Navigation";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import Contact from "../Contact";

function Header() {
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
        <section className="page-container">
            <section className="top-line"></section>
            <section className="home-container">
                <header>
                    <Navigation
                        pageSelected={pageSelected}
                        togglePage={togglePage}
                    />
                    <main>
                        <div>{getPage(pageSelected)}</div>
                    </main>
                </header>
            </section>
        </section>
    )
}

export default Header;