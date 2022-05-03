import React from "react";
import './ProjectsBottomUser.css'
import { BsLockFill, BsUnlockFill } from 'react-icons/bs'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledProjectContent = styled.div`
    color:${props => props.theme.text};
    box-shadow: 0px 0px .3rem ${props => props.theme.dark}
`

const ProjectsBottomUser = ({ projects }) => {

    return (
        <>
            {
                projects.map(project => (

                    <StyledProjectContent
                        className="userBoxInfo__projectContent"
                        key={project.id}
                    >

                        <h1 className="userBoxInfo__projectTitle">
                            {project.name.length > 23 ? 
                                project.name.substr(0,23).padEnd(26, '.'):
                                project.name
                            }
                        </h1>
                        {project.private ?
                            <h2 className="userBoxInfo__private">
                                <BsLockFill />Privado
                            </h2>
                            :
                            <h2 className="userBoxInfo__private">
                                <BsUnlockFill />Aberto
                            </h2>}
                        <Link to={`/projetos/${project.name}`} className="userBoxInfo__link">
                            Veja mais
                        </Link>
                    </StyledProjectContent>
                ))
            }
        </>
    )
}

export default ProjectsBottomUser