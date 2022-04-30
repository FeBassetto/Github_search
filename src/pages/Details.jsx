import React, { useContext } from "react";
import { ContextSearchUser } from "../common/Context/SearchUser";
import UserNotSearch from "../components/UserNotSearch/UserNotSearch";



const Details = () => {

    const context = useContext(ContextSearchUser)

    return(
        <>
            {context.searchedUser.length === 0 && (
                <UserNotSearch/>
            )}
        </>
    )
}

export default Details