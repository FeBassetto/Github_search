import React, { useContext } from "react";
import './SuccessUser.css'
import TopSuccessUser from "./TopSuccessUser/TopSuccessUser";
import BottomSuccess from './BottomSuccessUser/BottomSuccessUser';
import { ContextSearchUser } from './../../../../common/Context/SearchUser';




const SuccessUser = () => {

    const context = useContext(ContextSearchUser)

    const title = context.projects.length > 0 ?
        'Projetos do usuário' :
        'Usuário não tem projetos' 

    return (
        <>

            <TopSuccessUser context={context} />
            <BottomSuccess context={context} text={title} />
        </>
    )
}

export default SuccessUser