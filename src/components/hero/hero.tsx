import {FC} from 'react';
import { Link } from 'react-router-dom';

 const Hero: FC = () => {
  return (
    <section className="intro" id="hero">
                    <div className="flex-container">
                        <h1 className="heading--main">Black Cat Restaurant</h1>
                        <p className="intro__info">
                            Cat Street 123, Riga, LATVIA
                        </p>

                        <p className="pagraph subheading intro__subheading ">
                            We love black cats and serve amazing food for
                            people! Try out our{" "}
                            <Link to="menu" className="link">
                                summer menu
                            </Link>{" "}
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
  );
}
 export default Hero;