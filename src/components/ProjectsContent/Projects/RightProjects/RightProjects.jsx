import React from "react";
import './RightProjects.css'
import styled from 'styled-components';
import {

    SiJavascript,
    SiCsharp,
    SiCplusplus,
    SiCloudera,
    SiGo,
    SiJava,
    SiPhp,
    SiPython,
    SiScala,
    SiTypescript,
    SiRuby,
    SiHtml5,
    SiCss3,
    SiGithub

} from 'react-icons/si'

const StyledRightBox = styled.div`
    color:${props => props.theme.text}
`


const RightProjects = ({ project }) => {

    const languagesIcons = {
        'javascript': <SiJavascript />,
        'c#': <SiCsharp />,
        'c++': <SiCplusplus />,
        'c': <SiCloudera />,
        'go': <SiGo />,
        'java': <SiJava />,
        'php': <SiPhp />,
        'python': <SiPython />,
        'scala': <SiScala />,
        'typescript': <SiTypescript />,
        'ruby': <SiRuby />,
        'html': <SiHtml5 />,
        'css': <SiCss3 />,
        'default': <SiGithub />

    }


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
                <a href={`${project.html_url}`}>
                    Link
                </a>
            </div>
        </StyledRightBox>
    )
}

export default RightProjects