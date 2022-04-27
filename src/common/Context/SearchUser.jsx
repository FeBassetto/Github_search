import React, { createContext, useState } from "react";
import api from '../Api/api'


export const ContextSearchUser = createContext()



const SearchProvider = ({children}) => {

    const [user, setUser] = useState([])

    function searchUser(userName){
        api.get(`/${userName}`)
        .then(res => setUser(res.data))
    }

    return(
        <ContextSearchUser.Provider value={{user, searchUser}}>
            {children}
        </ContextSearchUser.Provider>
    )
} 

export default SearchProvider