import React, { useContext } from "react";
import './ProjectsContent.css'
import styled from 'styled-components';
import { ContextSearchUser } from './../../common/Context/SearchUser';
import ProjectsBox from "./Projects/ProjectsBox";

const StyledProjectsContent = styled.section`
    background-color:${props => props.theme.background}
`

const StyledTitleProjects = styled.h1`
    color:${props => props.theme.text}
`

const ProjectsContent = () => {

    const context = useContext(ContextSearchUser)

    return(
        <StyledProjectsContent className="projectsContent">
            <StyledTitleProjects className="titleProjects">
                Projetos do usuário
            </StyledTitleProjects>
            <ProjectsBox context={context} />
        </StyledProjectsContent>
    )
}

export default ProjectsContent