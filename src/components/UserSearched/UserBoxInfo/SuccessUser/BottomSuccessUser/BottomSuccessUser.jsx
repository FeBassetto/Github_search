import React from "react";
import './BottomSuccessUser.css'
import styled from 'styled-components';
import ProjectsBottomUser from "./ProjectsBottomUser/ProjectsBottomUser";
import { Link } from "react-router-dom";

const StyledTitleProjects = styled.h1`
    color:${props => props.theme.text}
`

const StyledProjects = styled.div`
    ::-webkit-scrollbar{
        background-color: ${props => props.theme.light};
        box-shadow: 0px 0px .2rem ${props => props.theme.dark}
    }
    ::-webkit-scrollbar-thumb{
        background:${props => props.theme.text};
    }
`

const StyledButtonMore = styled.button`
    background-color:${props => props.theme.light};
    color:${props => props.theme.text};
    box-shadow: 0px 0px .2rem ${props => props.theme.dark};

    :hover{
        background-color:${props => props.theme.text};
        color:${props => props.theme.light};
    }
`

const BottomSuccess = ({ context }) => {

    const projects = context.projects

    return (
        <div className="userBoxInfo__bottom">

            <StyledTitleProjects className="userBoxInfo__titleProject">
                Projetos do usuário
            </StyledTitleProjects>

            <StyledProjects
                className="userBoxInfo__projects">

                <ProjectsBottomUser
                    projects={projects}
                />

            </StyledProjects>

            <Link to="/projetos" className="userBoxInfo__linkButton">
                <StyledButtonMore className="userBoxInfo__buttonMore">
                    Veja mais projetos
                </StyledButtonMore>
            </Link>
        </div>
    )
}

export default BottomSuccess