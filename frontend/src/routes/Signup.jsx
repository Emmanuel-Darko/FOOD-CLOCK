import React,{useContext, useEffect, useState} from 'react';
import {Button, Box, CssBaseline, Container, Grid, TextField, Typography
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as Link2, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../context/AuthContext';
import appLogo from '../assets/foodclock.png'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'© '}
        A Maxim Nyansa Food Schedule
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Signup() {
  const { signup, isSignedIn, loading, setLoading } = useContext(AuthContext)
  const [localLoader, setLocalLoader] = useState(false)
  const navigate = useNavigate()
  const {state} = useLocation()
  
  // For testing email string
  const regex = /^\S+@\S+\.\S+$/;
  
  const [email, setEmail] = useState({
    value: '',
    error: false,
    errorMessage: 'Enter valid email'
  })

  const [pass, setPass] = useState({
    value: '',
    error: false,
    errorMessage: 'Enter at least 5 characters'
  })

  const [confirmPass, setConfirmPass] = useState({
    value: '',
    error: false,
    errorMessage: 'Password mismatch'
  })

  // Change Handlers
  const handleEmailChange = (e) => {
    setEmail({...email, value:e.target.value, error: regex.test(e.target.value) ? false : true })
  }
  const handlePassChange = (e) => {
    setPass({...pass, value:e.target.value, error: e.target.value.length >= 5 ? false : true})
  }
  const handleConfirmPassChange = (e) => {
    setConfirmPass({...confirmPass, value:e.target.value, error: (e.target.value === pass.value && e.target.value.length >= 5) ? false : true})
  }
  
  const req = {
    "email": email.value,
    "password": pass.value
  }
  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    let status = signup(req)
    if (status === 'true'){
      navigate( state?.path || "/home")
    }
    else{
      // return
    }
  }

  useEffect(() => {
    if(isSignedIn)
      navigate( state?.path || "/home" )
  }, [isSignedIn])
  
  useEffect(() => {
    setLocalLoader(loading)
  }, [loading])

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={{padding:'0 3rem'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={appLogo} style={{height:'7em', willChange:'filter'}} className="logo" alt="App logo" />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name="email"
              // autoComplete="email"
              // autoFocus
              value={email.value}
              onChange={handleEmailChange}
              error={email.error}
              helperText={email.error && email.errorMessage}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="current-password"
              value={pass.value}
              onChange={handlePassChange}
              error={pass.error}
              helperText={pass.error && pass.errorMessage}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPass"
              label="Confirm Password"
              type="password"
              id="confirmPass"
              autoComplete="current-password"
              value={confirmPass.value}
              onChange={handleConfirmPassChange}
              error={confirmPass.error}
              helperText={confirmPass.error && confirmPass.errorMessage}
            />

            {
              localLoader ?
                <LoadingButton 
                  loading={localLoader}
                  variant="contained"
                  color='primary'
                  sx={{ mt: 3, mb: 2, mr: 0, ml:0, backgroundColor:'#81CF01',display:'flex',width:'100%'}}
                >
                  &emsp;
                </LoadingButton>
              :

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled = {email.error || pass.error || confirmPass.error || !email.value || !pass.value || !confirmPass.value}
                  sx={{ mt: 3, mb: 2, color:'#FFF',backgroundColor:'#81CF01' }}
                >
                  Sign Up
                </Button>
            }

            <Grid container>
              <Grid item sm>
                <Link2 to="/signin">
                    <span style={{fontFamily:'monospace',fontSize:'14px',textDecoration:'underline'}}>
                        {"Already registered? Sign in"}
                    </span>
                </Link2>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />

        {/* Toast Notification */}
        <ToastContainer />

      </Container>
    </ThemeProvider>
  );
}