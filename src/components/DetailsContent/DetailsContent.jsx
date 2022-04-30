import React from "react";
import './DetailsContent.css'
import styled from 'styled-components'

const StyledDetailsContent = styled.main`
    background-color:${props => props.theme.background}
`

const DetailsContent = ({context}) => {

    console.log(context)

    return(
        <StyledDetailsContent className="detailsContent">
            
        </StyledDetailsContent>
    )
}

export default DetailsContent