import React, { FC, ChangeEvent } from "react";
import { useState } from "react";
import faqData from "../../faq-data";
import FaqItem from "../FaqItem/FaqItem";

const Faq: FC = () => {
    const [faqItems, setFaqItems] = useState(faqData);
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(e.target.value.toLowerCase().trim());
        const filteredData = faqData.filter(
            (item) =>
                item.answer.toLowerCase().includes(searchTerm) ||
                item.question.toLowerCase().includes(searchTerm)
        );
        setFaqItems(filteredData);
    };

    const handleClearSearch = () => {
        setSearchTerm("");
        setFaqItems(faqData);
    };
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
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                />

                <button
                    className="button--outline"
                    id="clear-search"
                    onClick={handleClearSearch}
                >
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
                {faqItems.map((item, index) => (
                    <FaqItem
                        key={item.question}
                        question={item.question}
                        answer={item.answer}
                        index={index}
                        setOpenQuestion={setOpenQuestion}
                        isOpen={openQuestion === item.question}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Faq;
