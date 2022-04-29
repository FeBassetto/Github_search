import React from "react";
import './NotFoundContent.css'
import styled from 'styled-components';
import Logo from "../Header/Logo/Logo";

const StyledNotFoundContent = styled.section`
    background-color:${props => props.theme.background};
`

const StyledError = styled.div`
    color:${props => props.theme.dark};
`

const StyledText = styled.p`
    color:${props => props.theme.text}
`

const NotFoundContent = () => {


    return(
        <StyledNotFoundContent className="notFoundContent">
            <StyledError>
                <Logo/>
                <StyledText className="notFoundContent__text">
                    Página não encontrada
                </StyledText>
            </StyledError>
        </StyledNotFoundContent>
    )
}

export default NotFoundContent