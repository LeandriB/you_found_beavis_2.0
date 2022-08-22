import React from "react";

function Navigation(props) {

    const pages = [ "About", "Portfolio", "Contact", "Resume"  ]

    return (
        <header>
            <nav>
            <ul className="flex-row">
                {pages.map((page) => (
                <li className={props.pageSelected === page ? "nav-item isActive" : "nav-item"}
                    key={page}
                    >
                    <a className={props.pageSelected === page ? "nav-link isActive" : "nav-link" } onClick={() => props.togglePage(page)}> {page} </a>
                </li>
                ))}
            </ul>
        </nav>
        </header>
    )
}

export default Navigation;