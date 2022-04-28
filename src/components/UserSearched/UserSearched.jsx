import React, { useContext } from "react";
import './UserSearched.css'
import styled from 'styled-components';
import { VscLoading } from 'react-icons/vsc'
import { ContextSearchUser } from './../../common/Context/SearchUser';
import UserBoxInfo from "./UserBoxInfo/UserBoxInfo";

const StyledUserSearched = styled.div`
    background-color:${props => props.theme.medium};
    box-shadow: 0px 0px .5rem ${props => props.theme.dark};
`
const StyledLoading = styled.div`
    color:${props => props.theme.text};
`

const StyledNotFound = styled.div`
    color:${props => props.theme.text}
`

const UserSearched = () => {

    const userContext = useContext(ContextSearchUser)

    return (
        <StyledUserSearched className="userSearched" >
            {(userContext.loading) && (
                <StyledLoading className="userSearched__loading">
                    <VscLoading className="loading__icon" />
                </StyledLoading>
            )}
            {!(userContext.loading) && !(userContext.searchedUser.login) && (
                <StyledNotFound className="userSearched__notFound">
                    Nenhum usuário foi pesquisado!
                </StyledNotFound>
            )}
            {!(userContext.loading) && (userContext.searchedUser.login || userContext.searchedUser.error) && (
                <StyledLoading className="userSearched__info">
                    <UserBoxInfo/>
                </StyledLoading>
            )}
        </StyledUserSearched>
    )
}

export default UserSearched