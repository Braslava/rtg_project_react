import React, { FC } from "react";
import "./sass/main.scss";

const App: FC = () => {
    return (
        <div className="App">
            <header className="header">
                <nav className="nav" data-visible="false" id="navigation">
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
                        <li className="nav__link">
                            <a href="menu.html" className="link link--dark">
                                Menu
                            </a>
                        </li>
                    </ul>
                </nav>
                <button
                    className="nav__toggle"
                    aria-controls="navigation"
                    aria-expanded="false"
                ></button>
            </header>
            <main>
                <section className="intro" id="hero">
                    <div className="flex-container">
                        <h1 className="heading--main">Black Cat Restaurant</h1>
                        <p className="intro__info">
                            Cat Street 123, Riga, LATVIA
                        </p>

                        <p className="pagraph subheading intro__subheading ">
                            We love black cats and serve amazing food for
                            people! Try out our{" "}
                            <a href="menu.html#menu" className="link">
                                summer menu
                            </a>{" "}
                            or{" "}
                            <a href="index.html#contact" className="link">
                                contact us
                            </a>{" "}
                            to book a table!
                        </p>
                        <div className="button-wrapper">
                            <a
                                href="#faq-section"
                                className="button button--link"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </section>
                <section className="faq flex-container" id="faq-section">
                    <h2 className="heading--section">
                        Frequently asked questions
                    </h2>
                    <div className="search-container">
                        <label htmlFor="search">Search in FAQ</label>
                        <input
                            className="js-search-input serach-container__input"
                            type="search"
                            id="search"
                            autoComplete="off"
                            spellCheck="false"
                            placeholder="Enter a search term"
                        />

                        <button className="button--outline" id="clear-search">
                            Clear
                        </button>
                    </div>
                    <div className="button-wrapper">
                        <button
                            className="button--small"
                            aria-controls="faq"
                            id="show-all-btn"
                        >
                            Open all
                        </button>
                        <button
                            className="button--small"
                            aria-controls="faq"
                            id="hide-all-btn"
                        >
                            Close all
                        </button>
                    </div>
                    <ul className="faq-container" id="faq"></ul>
                </section>
                <section id="contact" className="container--dark-bg">
                    <h2 className="sr-only">Contact information</h2>
                    <div className="contact">
                        <div className="contact__details">
                            <h2 className="contact__heading">
                                Contact information:{" "}
                            </h2>
                            <p className="paragraph">
                                Address: Cat Street 123, Riga, LATVIA
                            </p>
                            <p className="paragraph">
                                Email: blackcat@blackcatresto.lv
                            </p>
                            <p className="paragraph">Phone: +371 12345678</p>
                        </div>

                        <iframe
                            className="contact__map-frame"
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2169.249956149014!2d24.027139215289655!3d57.064373197542196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eec6a4ee53c901%3A0xae9086350af609e0!2sMangalsala%20breakwater!5e0!3m2!1sen!2slv!4v1647418173553!5m2!1sen!2slv"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen={true}
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="social-icons-container">
                        <h3 className="sr-only">Social media</h3>
                        <a
                            href="https://github.com/Braslava"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="social-media-link"
                            aria-label="Author's Github"
                        >
                            <img
                                className="social-media-icon"
                                src="assets/social-media/icons8-github.svg"
                                alt="author's Github"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/braslava/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="social-media-link"
                            aria-label="Author's LinkedIn"
                        >
                            <img
                                className="social-media-icon"
                                src="assets/social-media/icons8-linkedin-64.svg"
                                alt="author's LinkedIn"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/cats_of_instagram/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="social-media-link"
                            aria-label="Cats of Instagram"
                        >
                            <img
                                className="social-media-icon"
                                src="assets/social-media/icons8-instagram-64.svg"
                                alt="cats of Instagram"
                            />
                        </a>
                    </div>
                </section>
                <section className="flex-container" id="quote">
                    <h2 className="sr-only">Inspirational Quote</h2>
                    <figure className="quote-container">
                        <blockquote className="quote">
                            “A happy arrangement: many people prefer cats to
                            other people, and many cats prefer people to other
                            cats.”
                        </blockquote>
                        <figcaption className="caption">
                            {" "}
                            - Mason Cooley
                        </figcaption>
                    </figure>
                </section>
            </main>
            <footer className="footer">
                <div className="flex-container">Made by Māra Braslava</div>
            </footer>
        </div>
    );
};

export default App;
