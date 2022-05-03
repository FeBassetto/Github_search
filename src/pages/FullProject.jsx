import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import FullProjectContent from "../components/FullProjectContent/FullProjectContent";
import { ContextSearchUser } from './../common/Context/SearchUser';



const FullProject = () => {

    const {projectId} = useParams()

    const context = useContext(ContextSearchUser)

    const thisProject = context.projects.filter(project => project.name === projectId)

    console.log(thisProject)

    return(
        <>
            <FullProjectContent
                project={thisProject}
            />
        </>
    )
}

export default FullProject