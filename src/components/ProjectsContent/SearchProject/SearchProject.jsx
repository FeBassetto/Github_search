import React, { useState } from "react";
import './SearchProject.css';
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

const SearchProject = ({searchProject}) => {

    const [searchValue, setSearchValue] = useState('')

    const ativarInput = (e) => {
        e.target.parentNode.firstChild.focus()
    }

    function verifyKey(e){
        if (e.key === 'Enter' || e === 'submit') {
            searchProject(searchValue)
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
                onKeyDownCapture={e => verifyKey(e)}
                id="projectValue"
            />

            <label
                className="search__placeHolder"
                onClick={e => ativarInput(e)}>
                Insira a linguagem do projeto
            </label>

            <FaSearch
                className="search__icon"
                id="search__icon"
                onClick={_ => verifyKey('submit')}
            />
        </StyledSearch>
    )
}

export default SearchProject