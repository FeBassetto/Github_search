import React from "react";
import './TopFooter.css'
import Logo from './../../Header/Logo/Logo';
import { Link } from "react-router-dom";


const TopFooter = () => {



    return (
        <div className="topFooter">
            <Logo />
            <nav className="footerNavigation">
                <ul className="footerList">
                    <li className="footerItem">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="footerItem">
                    <Link to="/detalhes">
                        Detalhes
                    </Link>
                    </li>
                    <li className="footerItem">
                    <Link to="favoritos">
                        Repositórios Favoritos
                    </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default TopFooter