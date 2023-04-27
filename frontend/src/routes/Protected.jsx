import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Protected = ({ children }) => {
    const {isSignedIn} = useContext(AuthContext)
    const location = useLocation()

    //If user signed in is false, return the user to the signin screen else return children
    if(!isSignedIn){
        return <Navigate to="/signin" replace state={{ path: location.pathname}}/>
    }

    return children
}

export default Protected