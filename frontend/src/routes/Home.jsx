import React, { useEffect, useState, useContext } from "react";
import {Backdrop, Badge, Box, Fab, Paper, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack} from '@mui/material';
import {Notifications, Logout, MapsUgcOutlined, ManageAccountsOutlined, DarkModeOutlined} from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import appLogo from '../assets/foodclock.png'
import foodback from '../assets/foodback.svg'
import '../static/home.css'
import { AuthContext } from "../context/AuthContext";

const Home = () => {
    const [todayMenu, setTodayMenu] = useState([])
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext)

    const getMenu = async() => {
        const serverRes = await axios.get('http://192.168.1.42:3000/menu')
        console.log(serverRes.data)
        setTodayMenu(serverRes.data)
    }

    const signoutUser = () =>{
        console.log("Signing out...")
       logout();
       navigate("/")
    }

    // Components
    // Menu Item List   
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#757575',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        fontFamily: 'Sono',
        borderRadius: '.5em'
        // color: theme.palette.text.secondary,
    }));
    // Floating Panel
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // Floating action
    const actions = [
        { icon: <MapsUgcOutlined sx={{color:'#81CF01'}}/>, name: 'Chat' },
        { icon: <ManageAccountsOutlined sx={{color:'#81CF01'}}/>, name: 'Account' },
        { icon: <DarkModeOutlined sx={{color:'#81CF01'}}/>, name: 'Dark' },
        { icon: <Logout onClick={signoutUser} sx={{color:'#81CF01'}}/>, name: 'Logout' },
    ];
    
    useEffect(()=>{
        getMenu()
    }, [])


    const Menu = () => (
        <Box sx={{ width: '80%', left: 0, right: 0, margin: '0 auto'}}>
            <Stack spacing={2}>
                {
                    todayMenu && 
                    todayMenu.map((menu, index) => (
                        <Item className="menuItem" key={menu.category_id}>
                            <div className="menu-time"> {menu.category_name.charAt(0).toUpperCase()+menu.category_name.slice(1)} </div> {/* Convert word to capitalize each word */}
                            <div className="menu-option"> {menu.item_name} </div>
                        </Item>
                    ))
                }
            </Stack>
        </Box>
    )

    const MemoizedMenu = React.memo(Menu)

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

            {/* Menu controlled by React Memo */}
            <MemoizedMenu />

            {/* Food back image SVG */}
            <div style={{display:'flex', justifyContent:'center'}}>
                <img src={foodback} style={{position: 'absolute', width: '50%'}}/>
            </div>

            {/* <Fab aria-label="add" size="medium" sx={{bottom:40,right:20,position:'absolute', color:'#FFF',backgroundColor:'#81CF01'}}>
                <AddIcon />
            </Fab> */}
            <Backdrop open={open} />
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                color="secondary"
                sx={{ position: 'absolute', bottom: 25, right: 25}}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                FabProps={{
                    sx: {
                      bgcolor: '#81CF01',
                      '&:hover': {
                        bgcolor: '#757575',
                      }
                    }
                  }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>


            <div className="b-note">
                <span style={{color:'#81CF01'}}> &copy; </span> A Maxim Nyansa Food Schedule
            </div>

        </div>
    )
}

export default Home;