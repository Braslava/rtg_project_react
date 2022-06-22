import React, { FC } from "react";
import "./sass/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import Faq from "./components/Faq/Faq";
// import Contacts from "./components/Contacts/Contacts";
// import Quote from "./components/Quote/Quote";
// import Footer from "./components/Footer/Footer";
// import Menu from "./components/Menu/Menu";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import NotFound from "./pages/NotFound";

const App: FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
