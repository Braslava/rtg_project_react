import React, {FC} from 'react';
import gitHubIcon from "../../assets/social-media/icons8-github.svg"
import linkedInIcon from "../../assets/social-media/icons8-linkedin.svg"
import instagramIcon from "../../assets/social-media/icons8-instagram.svg"

 const Contacts: FC = () => {
  return (
    <section id="contact" className="container--dark-bg">
            <h2 className="sr-only">Contact information</h2>
            <div className="contact">
                <div className="contact__details">
                    <h2 className="contact__heading">Contact information: </h2>
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
                        src={gitHubIcon}
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
                        src={linkedInIcon}
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
                        src={instagramIcon}
                        alt="cats of Instagram"
                    />
                </a>
            </div>
        </section>
  );
}
 export default Contacts;