import React, { useEffect, useState, useContext } from "react";
import {Badge, Box, Paper, Stack} from '@mui/material';
import {Notifications} from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import axios from "axios";

import appLogo from '../assets/foodclock.png'
import foodback from '../assets/foodback.svg'
import '../static/home.css'

const Home = () => {
    const [todayMenu, setTodayMenu] = useState([])

    const getMenu = async() => {
        const serverRes = await axios.get('http://192.168.1.97:3000/menu')
        console.log(serverRes.data)
        setTodayMenu(serverRes.data)
    }

    useEffect(()=>{
        getMenu()
    }, [])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#757575',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        fontFamily: 'Sono',
        borderRadius: '.5em'
        // color: theme.palette.text.secondary,
      }));

    return(
        <div className="root">
            <div className="topbar">
                <div className="logoContainer">
                    <img src={appLogo} className="logo" alt="App logo" style={{width:'100%'}}/>
                </div>
                <div className="titleContainer">
                    <span style={{color:'#81CF01'}}>food</span> clock
                </div>
                <div className="notificationContainer">
                    <Badge badgeContent={4} color="error">
                        <Notifications sx={{color:'#000'}}/>
                    </Badge>
                </div>
            </div>
            <div>
                <h4 className="title"> Today's Menu </h4>
            </div>

            <Box sx={{ width: '80%', left: 0, right: 0, margin: '0 auto'}}>
                <Stack spacing={2}>
                    {
                        todayMenu?.map((menu, index) => (
                            <Item className="menuItem" key={menu.category_id}>
                                <div className="menu-time"> {menu.category_name.charAt(0).toUpperCase()+menu.category_name.slice(1)} </div> {/* Convert word to capitalize each word */}
                                <div className="menu-option"> {menu.item_name} </div>
                            </Item>
                        ))
                    }
                </Stack>
            </Box>

            {/* Food back image SVG */}
            <div style={{display:'flex', justifyContent:'center'}}>
                <img src={foodback} style={{position: 'absolute', width: '50%'}}/>
            </div>

            <div className="b-note">
                <span style={{color:'#81CF01'}}> &copy; </span> A Maxim Nyansa Food Schedule
            </div>

        </div>
    )
}

export default Home;