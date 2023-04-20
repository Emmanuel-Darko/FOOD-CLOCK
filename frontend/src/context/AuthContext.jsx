import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isSignedIn, setSignedIn] = useState(false)

    return(
        <AuthContext.Provider value={{isSignedIn, setSignedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthContextProvider}
