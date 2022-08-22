import React from "react";

function Navigation(props) {

    const pages = [ "About", "Portfolio", "Contact", "Resume"  ]

    return (
        <section>
            <nav>
                <ul className="nav nav-pills mb-3 justify-content-end">
                    {pages.map((page) => (
                    <li className={props.pageSelected === page ? "nav-item isActive" : "nav-item"}
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