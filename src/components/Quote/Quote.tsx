import React, { FC } from "react";

const Quote: FC = () => {
    return (
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
    );
};
export default Quote;
