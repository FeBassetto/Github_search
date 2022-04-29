import React, { useContext } from "react";
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound404 from "./pages/NotFound404";
import Projects from './pages/Projects';
import { ContextSearchUser } from './common/Context/SearchUser';


const Routing = () => {

    const context = useContext(ContextSearchUser)

    const projectPage = context.projects.length !== 0 ? <Projects/> : <NotFound404 />

    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/projetos" element={projectPage} />
                <Route path="*" element={<NotFound404 />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Routing
