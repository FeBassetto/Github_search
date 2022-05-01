import React from "react";
import './UserNotSearch.css'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const MainNotSearch = styled.main`
    background-color:${props => props.theme.background}
`

const TitleNotSearch = styled.h1`
    color:${props => props.theme.text}
`

const ButtonNotSearch = styled.button`
    background-color:${props => props.theme.text};
    color:${props => props.theme.background};
    box-shadow: 0px 0px .4rem ${props => props.theme.text};
`

const UserNotSearch = ({text}) => {



    return (
        <MainNotSearch className="userNotSearched">
            <TitleNotSearch className="userNotSearched__titleSearch">
                {text}
            </TitleNotSearch>
            <Link to="/">
                <ButtonNotSearch className="userNotSearched__buttonSearch">
                    Ir para campo de pesquisa
                </ButtonNotSearch>
            </Link>
        </MainNotSearch>
    )
}

export default UserNotSearch