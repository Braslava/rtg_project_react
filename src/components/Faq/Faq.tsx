import React, { FC, ChangeEvent, useState } from "react";
import faqData from "../../data/faq-data";
import FaqItem from "../FaqItem/FaqItem";

const Faq: FC = (props) => {
    const [faqItems, setFaqItems] = useState(faqData);
    const [openQuestions, setOpenQuestions] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [allAnswersOpen, setAllAnswersOpen] = useState<boolean>(false);

    const handleSearchInputChange = (
        e: ChangeEvent<HTMLInputElement>
    ): void => {
        setSearchTerm(e.target.value.toLowerCase().trim());
        const filteredData = faqData.filter(
            (item) =>
                item.answer.toLowerCase().includes(searchTerm) ||
                item.question.toLowerCase().includes(searchTerm)
        );
        setFaqItems(filteredData);
    };

    const handleClearSearch = (): void => {
        setSearchTerm("");
        setFaqItems(faqData);
    };

    const handleOpenAll = (): void => {
        setOpenQuestions(faqData.map((item) => item.question));
        setAllAnswersOpen(true);
    };

    const handleCloseAll = (): void => {
        setAllAnswersOpen(false);
        setOpenQuestions([]);
    };

    const isItemOpen = (question: string): boolean => {
        return openQuestions.includes(question);
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
                    onClick={handleOpenAll}
                >
                    Open all
                </button>
                <button
                    className="button--small"
                    aria-controls="faq"
                    id="hide-all-btn"
                    onClick={handleCloseAll}
                >
                    Close all
                </button>
            </div>
            <ul className="faq-container" id="faq">
                {faqItems.map((item, index: number) => (
                    <FaqItem
                        key={item.question}
                        question={item.question}
                        answer={item.answer}
                        index={index}
                        openQuestions={openQuestions}
                        setOpenQuestions={setOpenQuestions}
                        isOpen={isItemOpen(item.question)}
                        allAnswersOpen={allAnswersOpen}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Faq;
