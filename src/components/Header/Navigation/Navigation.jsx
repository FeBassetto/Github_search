import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'


const Navigation = () => {



    return(
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="list__item">
                    <Link to="/" className="item__link">
                        Home
                    </Link>
                </li>
                <li className="list__item">
                    <Link to="/detalhes" className="item__link">
                        Detalhes
                    </Link>
                </li>
                <li className="list__item">
                    <Link to="/favoritos" className="item__link">
                        Repositórios favoritos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation