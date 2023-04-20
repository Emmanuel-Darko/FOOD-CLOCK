import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Protected = ({ children }) => {
    const {isSignedIn} = useContext(AuthContext)

    if(!isSignedIn){
        return <Navigate to="/signin" replace />
    }

    return children
}

export default Protected