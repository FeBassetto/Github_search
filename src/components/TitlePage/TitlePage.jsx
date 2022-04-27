import React from "react";
import './TitlePage.css';
import styled from 'styled-components';


const StyledTitle = styled.h1`
 color: ${props => props.theme.text};
`

const TitlePage = ({text}) => {



    return (
        <StyledTitle className="titlePage">
            {text}
        </StyledTitle>
    )
}

export default TitlePage