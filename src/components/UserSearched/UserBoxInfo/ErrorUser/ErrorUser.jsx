import React from "react";
import './ErrorUser.css'
import styled from 'styled-components';


const StyledError = styled.h1`
    color:${props => props.theme.errorText};
    background-color:${props => props.theme.errorBackground};
    box-shadow: 0px 0px 1rem ${props => props.theme.errorshadow};
`

const ErrorUser = () => {

    return (
        <div className="errorContent">
            <StyledError className="errorContent__text">Usuário não encontrado</StyledError>
        </div>
    )
}

export default ErrorUser