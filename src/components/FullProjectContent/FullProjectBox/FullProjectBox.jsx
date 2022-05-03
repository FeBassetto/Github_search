import React from "react";
import './FullProjectBox.css';
import styled from 'styled-components';
import {
    BsCalendarFill,
    BsFillEyeFill,
    BsFillStarFill,
    BsCloudUpload,
    BsFolderFill,
    BsLockFill,
    BsUnlockFill
}
    from 'react-icons/bs'
import { GoIssueOpened } from 'react-icons/go'
import languagesIcons from "../../../common/Js/LanguageIcons/LanguageIcons";

const StyledBox = styled.div`
    background-color:${props => props.theme.light};
    color:${props => props.theme.text};
    box-shadow: 0px 0px .2rem ${props => props.theme.text};
`

const FullProjectBox = ({ project }) => {

    const createdDate = new Date(project.created_at).getTime()
    const updatedDate = new Date(project.pushed_at).getTime()
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

    const language = project.language?.toLowerCase()
    const languageIcon = language === undefined ? 'default' : language

    return (
        <StyledBox className="fullProjectBox">
            <h1 className="fullProjectBox__name">
                {project.name}
            </h1>

            <h2 className="fullProjectBox__description">
                {project.description ?
                    project.description
                    : 'Sem descrição'}
            </h2>

            <p className="fullProjectBox__diffCreate fullProjectBox__info">
                Criado: {diffCreatedDays} {diffCreatedDays === 1 ? 'dia' : 'dias'} atrás <BsCalendarFill />
            </p>

            <p className="fullProjectBox__diffUpdate fullProjectBox__info">
                Última atualização: {diffupdatedDateDays} {diffupdatedDateDays === 1 ?
                    'dia' : 'dias'} atrás <BsCloudUpload />
            </p>

            <p className="fullProjectBox__language fullProjectBox__info">
                Linguagem: {project.language ?
                    project.language :
                    'GitHub'} {languagesIcons[languageIcon]}
            </p>

            <p className="fullProjectBox__visibility fullProjectBox__info">
                Visibilidade: {project.visibility === 'public' ?
                    <span>público <BsUnlockFill/> </span> :
                    <span>privado <BsLockFill/> </span>}
            </p>

            <p className="fullProjectBox__watchers fullProjectBox__info">
                Watchers: {project.watchers_count} <BsFillEyeFill />
            </p>

            <p className="fullProjectBox__stars fullProjectBox__info">
                Estrelas: {project.stargazers_count} <BsFillStarFill />
            </p>

            <p className="fullProjectBox__size fullProjectBox__info">
                Tamanho: {project.size} KB <BsFolderFill />
            </p>

            <p className="fullProjectBox__issues fullProjectBox__info">
                Issues Abertas: {project.open_issues} <GoIssueOpened />
            </p>

        </StyledBox>
    )
}

export default FullProjectBox