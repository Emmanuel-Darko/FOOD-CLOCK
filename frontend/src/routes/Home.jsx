import React from "react";
import {Badge, Box, Paper, Stack} from '@mui/material';
import {Notifications} from '@mui/icons-material'
import { styled } from '@mui/material/styles';

import appLogo from '../assets/foodclock.png'
import foodback from '../assets/foodback.svg'
import '../static/home.css'

const Home = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#757575',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        fontFamily: 'Sono',
        borderRadius: '10px'
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
            {/* <div className="main">
                <div className="menu">
                    <div className="menu-time">Breakfast</div>
                    <div className="menu-option"> Hot Choco with Toast </div>
                </div>
                <div className="menu">
                    <div className="menu-time">Lunch</div>
                    <div className="menu-option"> Jollof with Chicken </div>
                </div>
                <div className="menu">
                    <div className="menu-time">Dinner</div>
                    <div className="menu-option"> Fufu </div>
                </div>
            </div> */}

            <Box sx={{ width: '80%', left: 0, right: 0, margin: '0 auto'}}>
                <Stack spacing={2}>
                    <Item>
                        <div className="menu-time">Breakfast</div>
                        <div className="menu-option"> Hot Choco with Toast </div>
                    </Item>
                    <Item>
                        <div className="menu-time">Lunch</div>
                        <div className="menu-option"> Jollof with Chicken </div>
                    </Item>
                    <Item>
                        <div className="menu-time">Dinner</div>
                        <div className="menu-option"> Fufu </div>
                    </Item>
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