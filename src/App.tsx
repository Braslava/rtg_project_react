import React, { FC } from "react";
import "./sass/main.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Faq from "./components/Faq/Faq";
import Contacts from "./components/Contacts/Contacts";
import Quote from "./components/Quote/Quote";
import Footer from "./components/Footer/Footer";

const App: FC = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <Faq />
                <Contacts />
                <Quote />
            </main>
            <Footer />
        </div>
    );
};

export default App;
