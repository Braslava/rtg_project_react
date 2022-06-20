import React, { FC } from "react";
import { useState } from "react";
import faqData from "../../faq-data";
import FaqItem from "../FaqItem/FaqItem";

const Faq: FC = () => {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);
    return (
        <section className="faq flex-container" id="faq-section">
            <h2 className="heading--section">Frequently asked questions</h2>
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
            <ul className="faq-container" id="faq">
                {faqData.map((item, index) => (
                    <FaqItem
                        key={item.question}
                        question={item.question}
                        answer={item.answer}
                        index={index}
                      //  openQuestion={openQuestion}
                        setOpenQuestion={setOpenQuestion}
                        isOpen={openQuestion === item.question}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Faq;
