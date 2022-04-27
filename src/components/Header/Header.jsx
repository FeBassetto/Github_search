import React from "react";
import './Header.css'
import styled from 'styled-components'
import Logo from "./Logo/Logo";

const StyledHeader = styled.header`
    background-color:${props => props.theme.lightMode.dark};
    width:100%;
    height:8vw;

    && > *{
        color:${props => props.theme.lightMode.headerText};
    }

    && > * a:hover{
        cursor: pointer;
        opacity: .7;
        transition: .4s;
    }

`

const Header = () => {

    return (
        <StyledHeader>
            <Logo />

        </StyledHeader>
    )
}

export default Header