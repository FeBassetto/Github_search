import React from "react";
import './TopSuccessUser.css'
import styled from 'styled-components';

const StyledUserName = styled.h1`
    color:${props => props.theme.text}
`
const StyledUserNickname = styled.h2`
    color:${props => props.theme.text}
`


const TopSuccessUser = ({context}) => {

    return (
        <div className="userBoxInfo__top">

            <img
                className="userBoxInfo__image"
                src={`${context.searchedUser.avatar_url}`}
                alt={`${context.searchedUser.login}`} />

            <StyledUserName className="userBoxInfo__name">
                {context.searchedUser.name ? context.searchedUser.name : 'Sem Nome'}
            </StyledUserName>

            <StyledUserNickname className="userBoxInfo__nickName">
                {`${context.searchedUser.login}`}
            </StyledUserNickname>

        </div>
    )
}

export default TopSuccessUser