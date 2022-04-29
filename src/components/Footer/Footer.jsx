import React from "react";
import './Footer.css'
import styled from 'styled-components';
import TopFooter from "./TopFooter/TopFooter";
import BottomFooter from "./BottomFooter/BottomFooter";

const StyledFooter = styled.footer`
    color:${props => props.theme.headerText};
    background-color: ${props => props.theme.dark}
`

const Footer = () => {


    return(
        <StyledFooter className="footer">
            <TopFooter/>
            <BottomFooter/>
        </StyledFooter>
    )
}

export default Footer