import React, { FC, SetStateAction, Dispatch } from "react";

export interface FaqItemProps {
    question: string;
    answer: string;
    index: number;
    isOpen: boolean;
    setOpenQuestion: Dispatch<SetStateAction<string | null>>;
}

const FaqItem: FC<FaqItemProps> = ({
    question,
    answer,
    index,
    setOpenQuestion,
    isOpen,
}) => {
    
    const handleQuestionClick = () => {
        if (isOpen) {
            setOpenQuestion(null);
        } else {
            setOpenQuestion(question);
        }
    };
    return (
        <li className="question-container" key={question}>
            <button
                onClick={() => handleQuestionClick()}
                className="question chevron right"
                aria-expanded={isOpen ? "true" : "false"}
                aria-controls={`item ${index}`}
            >
                {question}
            </button>
            {isOpen && (
                <p
                    className={
                        isOpen ? "answer paragraph" : "answer paragraph hidden"
                    }
                    aria-hidden={isOpen ? "false" : "true"}
                    id={`item ${index}`}
                    role="region"
                >
                    {answer}
                </p>
            )}
        </li>
    );
};

export default FaqItem;
