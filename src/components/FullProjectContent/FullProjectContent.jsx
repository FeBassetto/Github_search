import React from "react";
import './FullProjectContent.css';
import styled from 'styled-components';
import FullProjectBox from "./FullProjectBox/FullProjectBox";

const StyledFullProjectContent = styled.main`
    background-color:${props => props.theme.background};
    color:${props => props.theme.text};
`


const FullProjectContent = ({ project }) => {

    return (
        <StyledFullProjectContent
            className="fullProjectContent">
            <FullProjectBox
                project={project[0]}
            />
        </StyledFullProjectContent>
    )
}

export default FullProjectContent