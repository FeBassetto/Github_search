import React from "react";
import './StarredRepoContent.css'
import styled from 'styled-components';
import UserNotSearch from "../UserNotSearch/UserNotSearch";
import languagesIcons from './../../common/Js/LanguageIcons/LanguageIcons';
import {BsCalendarFill, BsFillEyeFill, BsFillStarFill, BsCloudUpload} from 'react-icons/bs'
import {GoIssueOpened} from 'react-icons/go'

const StyledStarredContent = styled.main`
    background-color:${props => props.theme.background};
    color:${props => props.theme.text}
`

const StyledStarredBox = styled.div`
    background-color:${props => props.theme.light};
    box-shadow: 0px 0px .4rem ${props => props.theme.text}
`

const StarredRepoContent = ({ starred }) => {

    window.scrollTo(0, 0)

    return (
        <StyledStarredContent className="starredContent">
            {starred.length > 0 ?

                starred.map(project => {

                    const createdDate = new Date(project.created_at).getTime()
                    const updatedDate = new Date(project.pushed_at).getTime()
                    const actualDate = new Date().getTime()

                    const diffCreate = actualDate - createdDate
                    const secondsCreate = diffCreate / 1000
                    const minutesCreate = secondsCreate / 60
                    const hoursCreate = minutesCreate / 60
                    const daysCreate = parseInt(hoursCreate / 24)

                    const diffUpdate = actualDate - updatedDate
                    const secondsUpdate = diffUpdate / 1000
                    const minutesUpdate = secondsUpdate / 60
                    const hoursUpdate = minutesUpdate / 60
                    const daysUpdate = parseInt(hoursUpdate / 24)

                    const language = project.language?.toLowerCase()
                    const languageIcon = language === undefined ? 'default' : language  
                
                    return (
                        <StyledStarredBox
                            className="starredContent__starredBox"
                            key={project.id}
                        >

                            <h1 className="starredBox__ownerName">
                                {project.owner.login}
                            </h1>

                            <img
                                src={`${project.owner.avatar_url}`}
                                alt={`${project.name}`}
                                className="starredBox__ownerImage" />

                            <h1 className="starredBox__projectName">
                                {project.name}
                            </h1>

                            <h2 className="starredBox__projectDescription">
                                {project.description ? project.description : 'Sem descrição'}
                            </h2>

                            <p className="starredBox__createDate starredBox__infos">
                                Criado: {daysCreate} {daysCreate === 1 ? 'dia' : 'dias'} atrás <BsCalendarFill/>
                            </p>

                            <p className="starredBox__lastUpdate starredBox__infos">
                                Ultima atualização: {daysUpdate} {daysUpdate === 1 ? 'dia' : 'dias'} atrás <BsCloudUpload/>
                            </p>

                            <p className="starredBox__stars starredBox__infos">
                                Estrelas: {project.stargazers_count} <BsFillStarFill/>
                            </p>

                            <p className="starredBox__watchers starredBox__infos">
                                Watchers: {project.watchers_count} <BsFillEyeFill/>
                            </p>

                            <p className="starredBox__language starredBox__infos">
                                Linguagem utilizada: {project.language ? project.language : 'GitHub'} {languagesIcons[languageIcon]}
                            </p>

                            <p className="starredBox__issue starredBox__infos">
                                Issues: {project.open_issues} <GoIssueOpened/>
                            </p>

                        </StyledStarredBox>
                    )
                })
                : <UserNotSearch
                    text="Sem conteúdo sobre este usuário"
                />}
        </StyledStarredContent>
    )
}

export default StarredRepoContent