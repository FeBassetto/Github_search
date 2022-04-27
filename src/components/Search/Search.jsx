import React, { useState } from "react";
import './Search.css'
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'


const StyledSearch = styled.div`
    && > * {
        background-color:${props => props.theme.medium};
        color:${props => props.theme.text}
    }

    && > .search__input:focus{
        box-shadow: 0px 0px .5rem ${props => props.theme.text};
    }
`

const ativarInput = (e) => {
    e.target.parentNode.firstChild.focus()
}

const searchUser = (e) => {
    
    if(e.key === 'Enter' || e === 'submit'){
        
    }
}

const Search = () => {


    const [searchValue, setSearchValue] = useState('')

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