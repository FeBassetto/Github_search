import React, { useContext } from "react";
import UserNotSearch from './../components/UserNotSearch/UserNotSearch';
import Loading from './../components/Loading/Loading';
import { ContextSearchUser } from './../common/Context/SearchUser';
import DetailsContent from './../components/DetailsContent/DetailsContent';
import StarredRepoContent from "../components/StarredRepo/StarredRepoContent";


const StarredRepo = () => {
    const context = useContext(ContextSearchUser)

    return (
        <>
            {
                context.loading && (
                    <Loading />
                )
            }

            {
                context.error && !context.loading && (
                    <UserNotSearch
                        text="Usuário pesquisado não encontrado"
                    />
                )
            }

            {
                !context.searchedUser.login && !context.loading && !context.error && (
                    <UserNotSearch
                        text="Nenhum usuário foi pesquisado"
                    />
                )
            }

            {context.searchedUser.login && (
                <StarredRepoContent starred={context.starredProjects} />
            )}
        </>
    )
}

export default StarredRepo