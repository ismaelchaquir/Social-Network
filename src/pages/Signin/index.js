import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useNavigate } from 'react-router-dom';
import  FormHelperText  from '@material-ui/core/FormHelperText';
// import axios from '../../utils/axios';
import authService from '../../services/authService';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    image: {
        backgroundImage: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: theme.spacing(2),
        textAlign: "center"
    },
    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1)
    },
    button: {
        marginTop: theme.spacing(1)
    },
    form: {
        margin: theme.spacing(2,4)
    }
}));

function Copyright(){
    return (
        <Typography variant="body2" align="center">
            {'Copyright © '}
            <a color="inherit" href="https://www.youtube.com/channel/UCVE9-HO_GzLtDK4IGKVSYXA">
                Lucas Nhimi
            </a>{' '}
            {new Date().getFullYear()}
        </Typography>
    )
}


 

function Signin(){
    const classes = useStyles();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSignIn() {
        try {
            await authService.signIn(email,password);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.response.data.message)
        }
    }

    return (

        <Grid container className={classes.root}>
            <Grid item container direction="column" justify="center" alignItems="center" className={classes.image} md={7}>
                <Typography style={{color: '#fff', fontSize: 23, lineHeight: '45px'}} >
                           <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
                </Typography>

                 <Typography style={{color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}} variant="body2">
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
                 </Typography>
            </Grid>

            <Grid item md={5}>
                <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutLinedIcon/>
                    </Avatar>
                    <Typography variant="h5">
                        Acesso
                    </Typography>

                    <form className={classes.form} >
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="E-mail"
                        type="email"
                        id="email"
                        autoComplete="email" 
                        autoFocus
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}/>

                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}/>

                    
                    <Button fullWidth variant="contained" color="primary" className={classes.button} onClick={handleSignIn}>Entrar</Button>
                    {
                        errorMessage && 
                        <FormHelperText error> 
                            {errorMessage}
                        </FormHelperText>
                    }

                    <Grid container>
                        <Grid item>
                            <Link>Esqueceu sua senha?</Link>
                        </Grid>
                        <Grid item>
                            <Link>Nao tem uma conta? Registre-se</Link>
                        </Grid>
                    </Grid>
                     </form>
                     <Copyright/>
                </Box>

                
            </Grid>
        </Grid>


        
    );
}

export default Signin;