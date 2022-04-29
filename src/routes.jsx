import React from "react";
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound404 from "./pages/NotFound404";
import Projects from './pages/Projects';


const Routing = () => {

    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/projetos" element={<Projects />} />
                <Route path="*" element={<NotFound404/>} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Routing
