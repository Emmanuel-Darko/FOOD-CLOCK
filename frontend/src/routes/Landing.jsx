import { useContext, useState } from 'react'
import '../static/main.css'
import {MenuBook, NotificationsActive} from '@mui/icons-material';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

import appLogo from '../assets/foodclock.png'
import foodback from '../assets/foodback.svg'

const Landing = () => {
  const navigate = useNavigate()
  const {isSignedIn} = useContext(AuthContext)

  const handleClick = () => {
    console.log("isSignedIn: ", isSignedIn)
    if(isSignedIn == true){
      navigate("/home")
    }
    else{
      navigate("/signin")
    }
  }

  return (
    <div className="App">
      <div>
        <img src={appLogo} style={{height:'10em', willChange:'filter'}} className="landing-logo" alt="App logo" />
      </div>
      <h1 style={{fontFamily:'Sono', fontSize:'40px'}}>Food <span style={{color:'#81CF01'}}> Clock </span></h1>
      
      {/* <div className="card">
        <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',marginBottom:'10px'}}>
          <span style={{backgroundColor:'#e2e2e2', width:'26px', padding:'10px', borderRadius:'50%', display:'flex',marginRight:'20px'}}>
            <MenuBook sx={{color:'#81CF01'}} /><br/>
          </span>
          <code style={{fontSize:'15px'}}> Menu lookup</code>
        </div>

        <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',marginBottom:'30px'}}> 
          <span style={{backgroundColor:'#e2e2e2', width:'26px', padding:'10px', borderRadius:'50%', display:'flex',marginRight:'20px'}}>
            <NotificationsActive sx={{color:'#81CF01'}} /><br/>
          </span>
          <code  style={{fontSize:'15px'}}> Real time notifications</code>
        </div>
      </div> */}

      <div style={{marginTop:'50px'}}>
        <Button 
          variant="outlined" 
          size="medium" 
          sx={{border: '1px solid #81CF01', color:'#555'}}
          onClick={handleClick}
        >
            Get started
        </Button>
      </div>

      {/* Food back image SVG */}
      <div style={{display:'flex', justifyContent:'center'}}>
        <img src={foodback} style={{position: 'absolute', width: '50%'}}/>
      </div>
      

      <p className="bottom-note">
        <span style={{color:'#81CF01'}}> &copy; </span> A Maxim Nyansa Food Schedule
      </p>
    </div>
  )
}

export default Landing
