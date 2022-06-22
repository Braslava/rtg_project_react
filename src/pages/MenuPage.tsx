import React, { FC } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";
import Contacts from "../components/Contacts/Contacts";
import Quote from "../components/Quote/Quote";
import Footer from "../components/Footer/Footer";

const MenuPage: FC = () => {
    return (
        <>
            <Header />
            <main>
                {/* <Hero /> */}
                <Menu />
                {/* <Contacts />
                <Quote /> */}
                <Contacts />
            </main>
            <Footer />
        </>
    );
};
export default MenuPage;
