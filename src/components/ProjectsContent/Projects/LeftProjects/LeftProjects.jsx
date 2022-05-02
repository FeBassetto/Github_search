import React from "react";
import './LeftProjects.css'
import styled from 'styled-components';
import { BsLockFill, BsUnlockFill } from 'react-icons/bs'

const StyledLeftBox = styled.div`
    color:${props => props.theme.text}
`

const LeftProjects = ({ project }) => {


    return (
        <StyledLeftBox className="projectsBox__left">

            <h1 className="projectsBox__title">
                {project.name.length > 17 ? 
                project.name.substr(0, 17).padEnd(20, '.') :
                project.name
                }
            </h1>

            <h2 className="projectsBox__description">
                {project.description?.length < 90 || project.description === null ?
                    project.description !== null ?
                        project.description :
                        'Sem descrição' :
                    project.description.substr(0, 90).padEnd(93, '.')
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
        </StyledLeftBox>
    )
}

export default LeftProjects