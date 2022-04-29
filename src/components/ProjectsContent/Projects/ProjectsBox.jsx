import React from "react";
import './ProjectsBox.css'
import styled from 'styled-components';
import LeftProjects from './LeftProjects/LeftProjects';
import RightProjects from './RightProjects/RightProjects';

const StyledProjectBox = styled.div`
    background-color:${props => props.theme.light};
    box-shadow: 0px 0px .4rem ${props => props.theme.text}
`



const ProjectsBox = ({ context }) => {

    window.scrollTo(0, 0)

    return (
        <>
            {context.projects.map(project => (
                <StyledProjectBox className="projectsBox" key={project.id}>
                    <LeftProjects project={project} />
                    <RightProjects project={project} />
                </StyledProjectBox>
            ))}
        </>
    )
}

export default ProjectsBox