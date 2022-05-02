import React, { useContext } from "react";
import { ContextSearchUser } from "../common/Context/SearchUser";
import DetailsContent from "../components/DetailsContent/DetailsContent";
import Loading from "../components/Loading/Loading";
import UserNotSearch from "../components/UserNotSearch/UserNotSearch";



const Details = () => {

    window.scrollTo(0, 0)

    const context = useContext(ContextSearchUser)

    return (
        <>
            {context.loading && (
                <Loading />
            )}

            {context.error && !context.loading && (
                <UserNotSearch 
                    text="Usuário pesquisado não encontrado"
                />
            )}

            {context.searchedUser.length === 0 && !context.loading && !context.error && (
                <UserNotSearch 
                    text="Nenhum usuário foi pesquisado"
                />
            )}

            {context.searchedUser.login && (
                <DetailsContent context={context.searchedUser} />
            )}
        </>
    )
}

export default Details