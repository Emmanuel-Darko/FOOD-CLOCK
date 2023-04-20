import React,{useContext, useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as Link2, useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import appLogo from '../assets/foodclock.png'
import { Checkbox } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'© '}
      {/* <Link color="inherit" href="https://mui.com/"> */}
        A Maxim Nyansa Food Schedule
      {/* </Link>{' '} */}
      {/* {new Date().getFullYear()} */}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Signin() {
  const {setSignedIn} = useContext(AuthContext)  
  const navigate = useNavigate()
  const regex = /^\S+@\S+\.\S+$/;
  const [loading, setLoading] = useState(false)

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

  // Change Handlers
  const handleEmailChange = (e) => {
    setEmail({...email, value:e.target.value, error: regex.test(e.target.value) ? false : true })
  }
  const handlePassChange = (e) => {
    setPass({...pass, value:e.target.value, error: e.target.value.length >= 5 ? false : true})
  }

  // Form Submission
  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)

    // Axios post request
    try{
      const req = {
        "email": email.value,
        "password": pass.value
      }
      const serverRes = await axios.post('http://192.168.1.42:3000/auth/login', req )
      console.log(serverRes.data)
      if(serverRes.status == 200){
        toast.success("Success!", {
          position: toast.POSITION.BOTTOM_CENTER
        });
        setLoading(false)
        setSignedIn(true)
        console.log("TESTING 1")
        navigate("/home")
      }else{
        toast.error(err.response.data.message, {
            position: toast.POSITION.BOTTOM_CENTER
        });
        setLoading(false)
        console.log("TESTING 2")
      }

    }catch(err){
      console.log("Server Error...", err)
      console.log("TESTING 3")
      setLoading(false)
      toast.error(err.response?.data.message ? err.response.data.message : err.message, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  }

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
            Sign in
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
              autoComplete="email"
              autoFocus
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
              autoComplete="current-password"
              value={pass.value}
              onChange={handlePassChange}
            //   error={pass.error}
            //   helperText={pass.error && pass.errorMessage}
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />

            {
              loading ?
                <LoadingButton 
                  loading
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
                  disabled = {email.error || !email.value || !pass.value}
                  sx={{ mt: 3, mb: 2, color:'#FFF',backgroundColor:'#81CF01' }}
                >
                  Sign In
                </Button>
            }

            <Grid container>
                <Grid item sm>
                    <Link href="#" variant="body2">
                    Forgot password?
                    </Link>
                </Grid>
                <Grid item sm>
                    <Link2 to="/signup">
                    <span style={{fontFamily:'monospace',fontSize:'14px',textDecoration:'underline'}}>
                        {"Don't have an account? Sign Up"}
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