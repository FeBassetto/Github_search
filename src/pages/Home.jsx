import React from "react";
import TitlePage from "../components/TitlePage/TitlePage";
import styled from 'styled-components';

const StyledHome = styled.main`
    background-color:${props => props.theme.light};
    padding-top:15vw;

    @media screen and (max-width:750px){
        padding-top:7rem;
    }
`

const Home = () => {


    return (
        <StyledHome>
            <TitlePage
                text="Pesquise um usuário do GitHub"
            />
        </StyledHome>
    )
}

export default Home