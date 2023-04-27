import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify';

export const AuthContext = React.createContext()

const useAuth = () => {
    const [isSignedIn, setSignedIn] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const local = localStorage.getItem("userStatus")

    React.useEffect(() => {
        if(local){
            setSignedIn(true)
        }
        console.log("useEffect running")
    },[])

    return{
        isSignedIn,
        loading,
        setLoading,

        login : async(req) =>{
            try{
                const authRes = await axios.post('http://192.168.1.42:3000/auth/login', req)
                if(authRes.status == 200){
                    toast.success("Success!", {
                        position: toast.POSITION.BOTTOM_CENTER
                    });
                    await localStorage.setItem("userStatus", JSON.stringify({uuid: authRes.data.uuid, state: 'online'}))
                    setSignedIn(true)
                    setLoading(false)
                    console.log("TESTING 1")
                    return('true')
                }else{
                    toast.error(err.response.data.message, {
                        position: toast.POSITION.BOTTOM_CENTER
                    });
                    setLoading(false)
                    console.log("TESTING 2")
                    return('false')
                }
            }catch(err) {
                console.log("Server Error...", err)
                console.log("TESTING 3")
                setLoading(false)
                toast.error(err.response?.data.message ? err.response.data.message : err.message, {
                    position: toast.POSITION.BOTTOM_CENTER
                });
                return('false')
            }
        },

        signup : async(req) =>{
            try{
                const authRes = await axios.post('http://192.168.1.42:3000/auth/signup', req)
                console.log("authRes", authRes)
                if(authRes.status == 201){
                    toast.success("Success!", {
                      position: toast.POSITION.BOTTOM_CENTER
                    });
                    localStorage.setItem("userStatus", JSON.stringify({uuid: authRes.data.uuid, state: 'online'}))
                    setSignedIn(true)
                    setLoading(false)
                    console.log("TESTING 1")
                    return(true)
                }else{
                    toast.error(err.response.data.message, {
                        position: toast.POSITION.BOTTOM_CENTER
                    });
                    setLoading(false)
                    console.log("TESTING 2")
                    return(false)
                }
            }catch(err) {
                console.log("Server Error...", err)
                console.log("TESTING 3")
                setLoading(false)
                toast.error(err.response?.data.message ? err.response.data.message : err.message, {
                    position: toast.POSITION.BOTTOM_CENTER
                });
                return(false)
            }
        },

        logout: () => {
            return new Promise((res) => {
                localStorage.removeItem("userStatus")
                setSignedIn(false)
                res();
            })
        }
    }

}

export const AuthContextProvider = ({ children }) => {
    const auth = useAuth();

    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}
































// import { createContext, useState } from "react";

// const AuthContext = createContext({
//     isSignedIn: false,
//     setSignedIn: () => {}
// })

// const AuthContextProvider = ({children}) => {
//     const [ isSignedIn, setSignedIn ] = useState(false)
//     console.log(isSignedIn)

//     return(
//         <AuthContext.Provider value={{isSignedIn, setSignedIn}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export{ AuthContext, AuthContextProvider }

























// import { createContext, useMemo, useState } from "react";

// const AuthContext = createContext({
//     isSignedIn: false,
//     setSignedIn: () => {},
//     signin: ()=>{},
//     signout: ()=>{}
// });

// const AuthContextProvider = ({ children }) => {
//     const [isSignedIn, setSignedIn] = useState(false)

//     const signin = () => setSignedIn(true)
//     const signout = () => setSignedIn(false)

//     const value = useMemo(() => (
//         isSignedIn,
//         setSignedIn,
//         signin,
//         signout
//     ))

//     return(
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export {AuthContext, AuthContextProvider}
