import { FC, MouseEvent, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// hash-link library does not work with react router 6
//import { HashLink } from "react-router-hash-link";

export interface HeaderProps {}

const Header: FC = (props: HeaderProps) => {
    const [navExpanded, setNavExpanded] = useState<boolean>(false);

    const handleNavClick = (e: MouseEvent) => {
        if (e.target instanceof HTMLAnchorElement) {
            setNavExpanded(false);
        }
    };

    let location = useLocation();
    const isOnHomePage = location.pathname === "/";

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
                        {!isOnHomePage && (
                            <Link
                                to={{ pathname: "/#hero" }}
                                className="link link--dark"
                            >
                                Home
                            </Link>
                        )}
                        {isOnHomePage && (
                            <a href="#hero" className="link link--dark">
                                Home
                            </a>
                        )}
                    </li>

                    {isOnHomePage && (
                        <>
                            <li className="nav__link">
                                <a
                                    href="#faq-section"
                                    className="link link--dark"
                                >
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
                        </>
                    )}
                    <li className="nav__link">
                        <Link
                            to={{ pathname: "/menu" }}
                            className="link link--dark"
                        >
                            Menu
                        </Link>
                    </li>
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
