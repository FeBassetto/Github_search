import React from "react";
import './Loading.css'
import styled from 'styled-components';
import {VscLoading} from 'react-icons/vsc'


const StyledLoading = styled.div`
    color:${props => props.theme.text};
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Loading = () => {



    return(
        <StyledLoading>
            <VscLoading className="loading"/>
        </StyledLoading>
    )
}

export default Loading