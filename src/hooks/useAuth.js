import { useState } from "react";

const useAuth = () => {

    const [credentials, setCredentials] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const getUsername = (username) => {
        setUsername(username)
    }
    const getPassword = (password) => {
        setPassword(password)
    }

    const getCredentials = (username, password) => {
        let encodedCredentials = btoa(username + ':' + password)
        let headerCredentials = ('Basic ' + encodedCredentials)
        return headerCredentials
    };

    return {
        getCredentials,
        getUsername,
        getPassword,
        username,
        password,
        credentials,
    }

}

export default useAuth