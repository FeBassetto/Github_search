import React from "react";
import './DetailsContent.css'
import styled from 'styled-components'

const StyledDetailsContent = styled.main`
    background-color:${props => props.theme.light};
    color:${props => props.theme.text};
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

            <section>
                <img
                    src={context.avatar_url}
                    alt="Imagem do usuário"
                    className="detailsContent__image"
                />

                <h1 className="detailsContent__name">
                    {context.name}
                </h1>

                <h2 className="detailsContent__login">
                    {context.login}
                </h2>

                <p className="detailsContent__initDate">
                    Data de início: {date}/{month}/{year}
                </p>

                <p className="detailsContent__totDate">
                    Dias de GitHub: {parseInt(daysDiff)}
                </p>

                <p className="detailsContent__company">
                    Empresa: {context.company}
                </p>

                <p className="detailsContent__location">
                    Localidade: {context.location}
                </p>

                <p className="detailsContent__followers">
                    Seguidores: {context.followers}
                </p>

                <p className="detailsContent__following">
                    Seguindo: {context.following}
                </p>
            </section>

        </StyledDetailsContent>
    )
}

export default DetailsContent