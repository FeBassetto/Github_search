import React, { useContext } from "react";
import { ContextSearchUser } from "../common/Context/SearchUser";
import DetailsContent from "../components/DetailsContent/DetailsContent";
import UserNotSearch from "../components/UserNotSearch/UserNotSearch";



const Details = () => {

    window.scrollTo(0,0)

    const context = useContext(ContextSearchUser)

    return(
        <>
            {!context.searchedUser.name && (
                <UserNotSearch/>
            )}

            {context.searchedUser.name && (
                <DetailsContent context={context.searchedUser} />
            )}
        </>
    )
}

export default Details