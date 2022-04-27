import React from "react";
import './Header.css'
import styled from 'styled-components'
import Logo from "./Logo/Logo";
import Navigation from './Navigation/Navigation';

const StyledHeader = styled.header`
    background-color:${props => props.theme.lightMode.dark};

    && > *{
        color:${props => props.theme.lightMode.headerText};
    } 
`

const Header = () => {

    return (
        <StyledHeader className="header">
            <Logo />
            <Navigation/>
            
        </StyledHeader>
    )
}

export default Header