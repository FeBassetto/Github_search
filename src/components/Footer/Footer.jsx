import React from "react";
import './Footer.css'
import styled from 'styled-components';
import TopFooter from "./TopFooter/TopFooter";

const StyledFooter = styled.footer`
    color:${props => props.theme.headerText};
    background-color: ${props => props.theme.dark}
`

const Footer = () => {


    return(
        <StyledFooter className="footer">
            <TopFooter/>
        </StyledFooter>
    )
}

export default Footer