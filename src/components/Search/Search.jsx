import React, { useState, useContext } from "react";
import './Search.css'
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'
import { ContextSearchUser } from './../../common/Context/SearchUser';


const StyledSearch = styled.div`
    && > * {
        background-color:${props => props.theme.medium};
        color:${props => props.theme.text}
    }

    && > .search__input:focus{
        box-shadow: 0px 0px .5rem ${props => props.theme.text};
    }
`



const Search = () => {


    const [searchValue, setSearchValue] = useState('')

    const userContext = useContext(ContextSearchUser)

    const ativarInput = (e) => {
        e.target.parentNode.firstChild.focus()
    }

    const searchUser = (e) => {

        if (e.key === 'Enter' || e === 'submit') {
            userContext.setUser(searchValue)
        }
    }

    return (
        <StyledSearch className="search">

            <input
                type="text"
                className="search__input"
                placeholder="."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onKeyDownCapture={e => searchUser(e)}
            />

            <label
                className="search__placeHolder"
                onClick={e => ativarInput(e)}>
                Insira o nome do Usuário
            </label>

            <FaSearch
                className="search__icon"
                id="search__icon"
                onClick={_ => searchUser('submit')}
            />
        </StyledSearch>
    )
}

export default Search