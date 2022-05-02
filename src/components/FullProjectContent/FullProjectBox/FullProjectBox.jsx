import React from "react";
import './FullProjectBox.css';
import styled from 'styled-components';


const StyledBox = styled.div`
    background-color:${props => props.theme.light};
    color:${props => props.theme.text};
    box-shadow: 0px 0px .2rem ${props => props.theme.text};
`

const FullProjectBox = ({ project }) => {

    const createdDate = new Date(project.created_at).getTime()
    const updatedDate = new Date(project.updated_at).getTime()
    const actualDate = new Date().getTime()

    const diffCreatedMili = actualDate - createdDate
    const diffCreatedSeconds = diffCreatedMili / 1000
    const diffCreatedMinutes = diffCreatedSeconds / 60
    const diffCreatedHours = diffCreatedMinutes / 60
    const diffCreatedDays = parseInt(diffCreatedHours / 24)

    const diffupdatedDateMili = actualDate - updatedDate
    const diffupdatedDateSeconds = diffupdatedDateMili / 1000
    const diffupdatedDateMinutes = diffupdatedDateSeconds / 60
    const diffupdatedDateHours = diffupdatedDateMinutes / 60
    const diffupdatedDateDays = parseInt(diffupdatedDateHours / 24)


    return (
        <StyledBox className="fullProjectBox">
            <h1 className="fullProjectBox__name">
                {project.name}
            </h1>

            <h2 className="fullProjectBox__description">
                {project.description}
            </h2>

            <p className="fullProjectBox__difference">
                Criado: {diffCreatedDays} {diffCreatedDays === 1? 'dia': 'dias'} atrás
            </p>

            <p className="fullProjectBox__difference">
                Última atualização: {diffupdatedDateDays} {diffupdatedDateDays === 1? 'dia': 'dias'} atrás
            </p>

            <p className="fullProjectBox__language">
                {project.language}
            </p>

            <p className="fullProjectBox__watchers">
                Watchers: {project.watchers_count}
            </p>

            <p className="fullProjectBox__stars">
                Estrelas: {project.stargazers_count}
            </p>

            <p className="fullProjectBox__visibility">
                Visibilidade: {project.visibility}
            </p>

        </StyledBox>
    )
}

export default FullProjectBox