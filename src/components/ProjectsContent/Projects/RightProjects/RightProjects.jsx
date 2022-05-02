import React from "react";
import './RightProjects.css'
import styled from 'styled-components';
import languagesIcons from './../../../../common/Js/LanguageIcons/LanguageIcons';
import { Link } from 'react-router-dom';

const StyledRightBox = styled.div`
    color:${props => props.theme.text}
`


const RightProjects = ({ project }) => {

    


    const language = project.language?.toLowerCase()
    const languageIcon = language === undefined ? 'default' : language
   

    return (
        <StyledRightBox className="rightProjects">
            <p className="rightProjects__language">
                Linguagem utilizada
            </p>
            <p className='rightProjects__icon'>
                {languagesIcons[languageIcon]}
            </p>
            <div className="rightProjects__url">
                <Link to={`${project.name}`}>
                    Link
                </Link>
            </div>
        </StyledRightBox>
    )
}

export default RightProjects