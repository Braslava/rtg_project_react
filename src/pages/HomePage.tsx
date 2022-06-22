import { FC } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Faq from "../components/Faq/Faq";
import Contacts from "../components/Contacts/Contacts";
import Quote from "../components/Quote/Quote";
import Footer from "../components/Footer/Footer";

const HomePage: FC = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Faq />
                <Contacts />
                <Quote />
            </main>
            <Footer />
        </>
    );
};
export default HomePage;
