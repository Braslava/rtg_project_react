import React, { FC, MouseEvent, useState } from "react";

export interface HeaderProps {}

const Header: FC = (props: HeaderProps) => {
    const [navExpanded, setNavExpanded] = useState<boolean>(false);

    const handleNavClick = (e: MouseEvent) => {
        if (e.target instanceof HTMLAnchorElement) {
            setNavExpanded(false);
        }
    };

    return (
        <header className="header">
            <nav
                className="nav"
                data-visible={navExpanded}
                id="navigation"
                onClick={handleNavClick}
            >
                <ul className="nav__list">
                    <li className="nav__link">
                        <a href="#hero" className="link link--dark">
                            Home
                        </a>
                    </li>
                    <li className="nav__link">
                        <a href="#faq-section" className="link link--dark">
                            FAQ
                        </a>
                    </li>
                    <li className="nav__link">
                        <a href="#contact" className="link link--dark">
                            Contact
                        </a>
                    </li>
                    <li className="nav__link">
                        <a href="#quote" className="link link--dark">
                            Inspiration
                        </a>
                    </li>
                    {/* <li className="nav__link">
                        <a href="menu.html" className="link link--dark">
                            Menu
                        </a>
                    </li> */}
                </ul>
            </nav>
            <button
                className="nav__toggle"
                aria-controls="navigation"
                aria-expanded={navExpanded}
                onClick={() => setNavExpanded(!navExpanded)}
            >
                <span className="sr-only">Menu</span>
            </button>
        </header>
    );
};

export default Header;
