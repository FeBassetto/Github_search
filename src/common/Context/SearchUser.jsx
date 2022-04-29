import React, { createContext, useState, useEffect } from "react";
import api from '../Api/api'


export const ContextSearchUser = createContext()



const SearchUserProvider = ({ children }) => {

    const [user, setUser] = useState('')
    const [searchedUser, setSearchedUser] = useState([])
    const [projects, setProjects] = useState([])
    const [error, setError] = useState('')
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
                    projects
                }
            }>

            {children}

        </ContextSearchUser.Provider>
    )

    function searchUser(userName) {


        if (userName) {
            setLoading(true)
            setTimeout(() => {
                api.get(`/${userName}`)
                    .then(res => {
                        setError('')
                        setSearchedUser(res.data)
                    })
                    .catch(err => {
                        setError(err)
                        setSearchedUser([])
                        setLoading(false)
                    })

                api.get(`https://api.github.com/users/${userName}/repos`)
                    .then(res => {
                        setError('')
                        setProjects(res.data)
                        setLoading(false)
                    })
                    .catch(err => {
                        setError(err)
                        setSearchedUser([])
                        setLoading(false)
                    })
            }, 4000);
        }
    }
}



export default SearchUserProvider