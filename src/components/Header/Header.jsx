import React from "react";
import './Header.css'
import styled from 'styled-components'
import Logo from "./Logo/Logo";
import Navigation from './Navigation/Navigation';
import ThemeMode from "./ThemeMode/ThemeMode";

const StyledHeader = styled.header`
    background-color:${props => props.theme.dark};

    && > *{
        color:${props => props.theme.headerText};
    } 
`

const Header = () => {

    return (
        <StyledHeader className="header">
            <Logo />
            <Navigation/>
            <ThemeMode/>
        </StyledHeader>
    )
}

export default Header