import React from "react";
import './Header.css'
import styled from 'styled-components'
import Logo from "./Logo/Logo";
import Navigation from './Navigation/Navigation';
import ThemeMode from "./ThemeMode/ThemeMode";
import MobileNavigation from "./MobileNavigation/MobileNavigation";

const StyledHeader = styled.header`
    background-color:${props => props.theme.dark};
    box-shadow: 0px 0px .3rem ${props => props.theme.text} ;

    && > *{
        color:${props => props.theme.headerText};
        background-color:${props => props.theme.dark};
    } 
`

const Header = () => {

    return (
        <>
            <StyledHeader className="header header--desktop">
                <Logo />
                <Navigation />
                <ThemeMode />
            </StyledHeader>

            <StyledHeader className="header header--mobile">
                <Logo />
                <div className="header__box">
                    <ThemeMode />
                    <MobileNavigation />
                </div>
            </StyledHeader>
        </>
    )
}

export default Header