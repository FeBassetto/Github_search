import React from "react";
import './ProjectsBox.css'
import styled from 'styled-components';
import { BsLockFill, BsUnlockFill } from 'react-icons/bs'

const StyledProjectBox = styled.div`
    background-color:${props => props.theme.light};
    box-shadow: 0px 0px .4rem ${props => props.theme.text}
`

const StyledRightBox = styled.div`
    color:${props => props.theme.text}
`

const ProjectsBox = ({ context }) => {


    return (
        <>
            {context.projects.map(project => (
                <StyledProjectBox className="projectsBox">
                    <StyledRightBox className="projectsBox__right">

                        <h1 className="projectsBox__title">
                            {project.name}
                        </h1>

                        <h2 className="projectsBox__description">
                            {project.description?.length < 60 || project.description === null ?
                                project.description !== null ?
                                    project.description :
                                    'Sem descrição' :
                                project.description.substr(0, 60).padEnd(63, '.')
                            }
                        </h2>

                        {project.private ?
                            (<p className="projectsBox__private">
                                <BsLockFill />Privado
                            </p>) :
                            (<p className="projectsBox__private">
                                <BsUnlockFill />Aberto
                            </p>)
                        }
                    </StyledRightBox>

                </StyledProjectBox>
            ))}
        </>
    )
}

export default ProjectsBox