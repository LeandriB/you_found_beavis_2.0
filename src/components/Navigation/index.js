import React from "react";

function Navigation(props) {

    const pages = [ "About", "Portfolio", "Contact", "Resume"  ]

    return (
        <section>
            <nav className="navbar-end" role="navigation" aria-label="main navigation">
                <ul className="nav navbar-brand">
                    {pages.map((page) => (
                    <li className={props.pageSelected === page ? "navbar-item isActive" : "navbar-item"}
                        key={page}
                        >
                        <a className={props.pageSelected === page ? "nav-link active" : "nav-link" } onClick={() => props.togglePage(page)}> {page} </a>
                    </li>
                    ))}
                </ul>
            </nav>
        </section>

    )
}

export default Navigation;