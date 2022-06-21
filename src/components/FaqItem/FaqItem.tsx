import React, { FC, SetStateAction, Dispatch } from "react";

export interface FaqItemProps {
    question: string;
    answer: string;
    index: number;
    isOpen: boolean;
    openQuestions: string[];
    setOpenQuestions: Dispatch<SetStateAction<string[]>>;
    allAnswersOpen: boolean;
    // setAllAnswersOpen: Dispatch<SetStateAction<boolean>>;
}

const FaqItem: FC<FaqItemProps> = ({
    question,
    answer,
    index,
    openQuestions,
    setOpenQuestions,
    isOpen,
    allAnswersOpen,
}) => {
    const handleQuestionClick = () => {
        if (allAnswersOpen) {
            isOpen
                ? setOpenQuestions(
                      openQuestions.filter(
                          (currentQuestion) => currentQuestion !== question
                      )
                  )
                : setOpenQuestions([...openQuestions, question]);
        } else {
            isOpen
                ? setOpenQuestions(
                      openQuestions.filter(
                          (currentQuestion) => currentQuestion !== question
                      )
                  )
                : setOpenQuestions([question]);
        }
        console.log(openQuestions);
    };
    return (
        <li className="question-container" key={question}>
            <button
                onClick={handleQuestionClick}
                className={
                    isOpen
                        ? "question chevron bottom"
                        : "question chevron right"
                }
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
