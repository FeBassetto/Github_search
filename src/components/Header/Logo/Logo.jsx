import React from "react";
import { Link } from "react-router-dom";
import './Logo.css'
import {BsGithub} from 'react-icons/bs'

const Logo = () => {


    return (
        <div className="logo">
            <Link to="/" className="logo__link">
                <p className="logo__text">
                <BsGithub/>Search
                </p>
            </Link>
        </div>
    )
}

export default Logo