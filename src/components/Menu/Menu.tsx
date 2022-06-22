import { FC } from "react";
import { Link } from "react-router-dom";

const Menu: FC = () => {
    return (
        <section id="menu" className="flex-container padding-top-bottom-lg">
            <h2 className="heading--section">MENU</h2>
            <p className="subheading">Starters</p>
            <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda nam deserunt commodi porro explicabo aperiam, minus
                repudiandae qui dicta id ipsum placeat impedit expedita dolorum
                possimus eius laborum mollitia? Nemo ut voluptatem quas
                repellendus magni soluta corporis eos eum eveniet nam id quam,
                laboriosam consequatur temporibus quaerat recusandae.
            </p>
            <p className="subheading">Soups</p>
            <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                quibusdam? Nihil cumque labore ad, delectus nulla, nesciunt
                voluptate a natus asperiores exercitationem soluta fuga,
                provident omnis aliquid. Sit accusamus maiores quidem magni id
                culpa voluptas sint. Odit voluptatem corrupti id ex aut nemo
                officiis officia in.
            </p>
            <p className="subheading">Mains</p>
            <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a
                dolores ex molestiae, repellat dignissimos, temporibus itaque
                doloremque repudiandae quasi quod doloribus recusandae eos sint
                facilis ducimus rerum optio aliquam commodi tempora praesentium.
                Eius, libero nisi.
            </p>
            <p className="subheading">Desserts</p>
            <ul className="list">
                <li>Fondant</li>
                <li>Apple pie*</li>
                <li>Cheesecake</li>
                <li>Icecream</li>
            </ul>
            <p className="paragraph">
                *Information about allergies: can contain peanuts.
            </p>
            <div className="button-wrapper margin-top-lg">
                <Link to="/" className="button--small button--link">
                    ⟵ Return to main page
                </Link>
            </div>
        </section>
    );
};
export default Menu;
