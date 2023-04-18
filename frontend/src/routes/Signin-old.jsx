import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link as Link2} from 'react-router-dom';
import appLogo from '../assets/foodclock.png'
import { useState } from 'react';


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

export default function SignIn() {
  const [errorEmail, setErrorEmail] = useState(true)
  const [emailErrorText, setEmailErrorText] = useState('Incorrect entry.')


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
          {/* <Avatar sx={{ m: 1}}> */}
            {/* <LockOutlinedIcon /> */}
            <img src={appLogo} style={{height:'7em', willChange:'filter'}} className="logo" alt="App logo" />
          {/* </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              error={errorEmail}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              helperText= {errorEmail ? emailErrorText : ''}
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:'#81CF01' }}
              to='/home'
              component={Link2}
            >
              Sign In
            </Button>
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
      </Container>
    </ThemeProvider>
  );
}