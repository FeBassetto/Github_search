import React from "react";
import './DetailsContent.css'
import styled from 'styled-components'
import { MdOutlineHomeRepairService, MdCalendarToday, MdLocationOn } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { RiGitRepositoryCommitsFill } from 'react-icons/ri'
import { VscAccount } from 'react-icons/vsc'


const StyledDetailsContent = styled.main`
    background-color:${props => props.theme.background};
    color:${props => props.theme.text};
`

const StyledSection = styled.section`
    background-color:${props => props.theme.light};
    color:${props => props.theme.text};
    box-shadow: 0px 0px .5rem ${props => props.theme.text}
`

const DetailsContent = ({ context }) => {

    const createdDate = new Date(`${context.created_at}`)
    const date = String(createdDate.getDate()).padStart(2, '0')
    const month = String(createdDate.getMonth() + 1).padStart(2, '0')
    const year = String(createdDate.getFullYear())

    const newDate = new Date()

    const diff = newDate.getTime() - createdDate.getTime()

    const secondsDiff = diff / 1000
    const minutesDiff = secondsDiff / 60
    const hoursDiff = minutesDiff / 60
    const daysDiff = hoursDiff / 24

    return (
        <StyledDetailsContent className="detailsContent">

            <StyledSection className="detailsContent__section">
                <img
                    src={context.avatar_url}
                    alt="Imagem do usuário"
                    className="detailsContent__image detailsContent__info"
                />

                <h1 className="detailsContent__name">
                    {context.name}
                </h1>

                <h2 className="detailsContent__login">
                    {context.login}
                </h2>

                <p className="detailsContent__initDate detailsContent__info">
                    Data de início: {date}/{month}/{year} <MdCalendarToday />
                </p>

                <p className="detailsContent__totDate detailsContent__info">
                    Tempo total de GitHub: {parseInt(daysDiff)} {daysDiff < 2 ? 'dia' : 'dias'} <BsGithub />
                </p>

                <p className="detailsContent__company detailsContent__info">
                    Empresa: {context.company} <MdOutlineHomeRepairService />
                </p>

                <p className="detailsContent__location detailsContent__info">
                    Localidade: {context.location} <MdLocationOn />
                </p>

                <p className="detailsContent__publicRepo detailsContent__info">
                    Projetos públicos: {context.public_repos} <RiGitRepositoryCommitsFill />
                </p>

                <p className="detailsContent__type detailsContent__info">
                    Tipo usuário: {context.type} <VscAccount />
                </p>

                <p className="detailsContent__followers detailsContent__info">
                    Seguidores: {context.followers} <AiOutlineUser />
                </p>

                <p className="detailsContent__following detailsContent__info">
                    Seguindo: {context.following} <AiOutlineUser />
                </p>


            </StyledSection>

        </StyledDetailsContent>
    )
}

export default DetailsContent