import React from "react";
import TitlePage from "../components/TitlePage/TitlePage";
import styled from 'styled-components';
import Search from './../components/Search/Search';
import UserSearched from "../components/UserSearched/UserSearched";

const StyledHome = styled.main`
    background-color:${props => props.theme.background};
    padding-top:15vw;
    padding-bottom:15vw;
    min-height:100vh;
    box-sizing:border-box;

    @media screen and (max-width:750px){
        padding-top:7rem;
    }
`

const Home = () => {


    return (
        <StyledHome>
            <section>
                <TitlePage
                    text="Pesquise um usuário do GitHub"
                />
                <Search />
                <UserSearched/>
            </section>
        </StyledHome>
    )
}

export default Home