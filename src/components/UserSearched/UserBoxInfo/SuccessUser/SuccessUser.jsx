import React, { useContext } from "react";
import './SuccessUser.css'
import TopSuccessUser from "./TopSuccessUser/TopSuccessUser";
import BottomSuccess from './BottomSuccessUser/BottomSuccessUser';
import { ContextSearchUser } from './../../../../common/Context/SearchUser';




const SuccessUser = () => {

    const context = useContext(ContextSearchUser)

    return (
        <>

            <TopSuccessUser context={context} />
            <BottomSuccess context={context} />
        </>
    )
}

export default SuccessUser