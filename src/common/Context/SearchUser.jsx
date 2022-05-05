import React, { createContext, useState, useEffect } from "react";
import api from '../Api/api'


export const ContextSearchUser = createContext()



const SearchUserProvider = ({ children }) => {

    const [user, setUser] = useState('')

    const [searchedUser, setSearchedUser] = useState([])
    const [projects, setProjects] = useState([])
    const [starredProjects, setStarredProjects] = useState([])

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        searchUser(user)
    }, [user])

    return (
        <ContextSearchUser.Provider
            value={
                {
                    searchedUser,
                    setUser,
                    error,
                    loading,
                    projects,
                    starredProjects
                }
            }>

            {children}

        </ContextSearchUser.Provider>
    )

    function catchError() {
        setError(true)
        setSearchedUser([])
        setStarredProjects([])
        setLoading(false)
    }

    function searchUser(userName) {


        if (userName) {
            setLoading(true)
            setSearchedUser([])
            setTimeout(() => {
                api.get(`/${userName}`)
                    .then(res => {
                        setError(false)
                        setSearchedUser(res.data)
                        setLoading(false)
                    })
                    .catch(_ => {
                        catchError()
                    })

                api.get(`/${userName}/repos`)
                    .then(res => {
                        setError(false)
                        setProjects(res.data)
                        setLoading(false)
                    })
                    .catch(_ => {
                        catchError()
                    })

                api.get(`/${userName}/starred`)
                    .then(res => {
                        setError(false)
                        setStarredProjects(res.data)
                        setLoading(false)
                    })
                    .catch(_ => {
                        catchError()
                    })
            }, 4000);
        }
    }
}



export default SearchUserProvider