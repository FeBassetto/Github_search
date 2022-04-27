import React from "react";
import './MobileNavigation.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';


const MobileNavigation = () => {

    const mobileNavigation = document.getElementsByClassName('mobileNavigation')[0]

    function openMenu() {
        mobileNavigation.classList?.add('mobileNavigation--open')
        mobileNavigation.classList?.remove('mobileNavigation--closed')
    }

    function closeMenu() {
        mobileNavigation.classList?.add('mobileNavigation--closing')
        setTimeout(() => {
            mobileNavigation.classList?.add('mobileNavigation--closed')
            mobileNavigation.classList?.remove('mobileNavigation--closing')
            mobileNavigation.classList?.remove('mobileNavigation--open')
        }, 400)
    }


    return (
        <nav className="mobileNavigation mobileNavigation--closed">
            <ul className="mobileNavigation__list">
                <li className="mobileNavigation__item mobileNavigation__icon">
                    <GiHamburgerMenu onClick={_ => openMenu()} />
                    <AiOutlineClose onClick={_ => closeMenu()} />
                </li>
                <li className="mobileNavigation__item mobileNavigation__item--hidden">
                    <Link to="/" className="mobileNavigation__link" onClick={_ => closeMenu()}>
                        Home
                    </Link>
                </li>
                <li className="mobileNavigation__item mobileNavigation__item--hidden">
                    <Link to="/detalhes" className="mobileNavigation__link" onClick={_ => closeMenu()}>
                        Detalhes
                    </Link>
                </li>
                <li className="mobileNavigation__item mobileNavigation__item--hidden">
                    <Link to="/favoritos" className="mobileNavigation__link" onClick={_ => closeMenu()}>
                        Repositórios favoritos
                    </Link>
                </li>
            </ul>
        </nav >
    )
}

export default MobileNavigation