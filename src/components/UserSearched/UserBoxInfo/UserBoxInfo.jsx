import React from "react";
import './UserBoxInfo.css'
import SuccessUser from './SuccessUser/SuccessUser';
import ErrorUser from "./ErrorUser/ErrorUser";



const UserBoxInfo = ({ context }) => {

    return (
        <>

            {context.error ? (
                <ErrorUser />
            ) :
                <SuccessUser />
            }
        </>
    )
}

export default UserBoxInfo