import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, FormControl, Input, InputLabel } from '@mui/material'
import appLogo from '../assets/foodclock.png'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [data, setData] = useState([])
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }
    const handlePassChange = (e) => {
        setPass(e.target.value)
        console.log(pass)
    }
    const handleSubmit = () => {
        console.log(email, pass)
        axios.post('http://localhost:3000/posts', {
            title: "My First Post",
            content: "Something new"
        })
        .then(res => {
            setData(res.data)
            console.log(res.data)
        })
        .catch((err) => console.log(err))
    }


    return(
        <div>
            <div>
                <img src={appLogo} style={{height:'8em', willChange:'filter'}} className="logo" alt="App logo" />
            </div>
            <h1 style={{fontFamily:'Sono', fontSize:'32px'}}>Food Clock</h1>

            Sign in / Sign up
            <br></br><br></br>
            <FormControl style={{display:'block',marginBottom: '20px'}}>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input id="email" type='email' value={email} onChange={handleEmailChange}/>
            </FormControl>
            <FormControl style={{display:'block', marginBottom: '50px'}}>
                <InputLabel htmlFor="pass">Password</InputLabel>
                <Input id="pass" type='password' value={pass} onChange={handlePassChange}/>
            </FormControl>

            <Button 
                variant="outlined" 
                size="medium" 
                sx={{border: '1px solid #81CF01', color:'#555'}}
                onClick={() => handleSubmit()}
            >
                Signup
            </Button>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    )
}

export default Auth