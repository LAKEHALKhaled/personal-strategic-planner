import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import EventNoteIcon from '@material-ui/icons/EventNote';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AdjustIcon from '@material-ui/icons/Adjust';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Container maxWidth="lg">
    <div className={classes.root}>
      <AppBar position="fixed" color="white" elevation={0} style={{borderBottom: '0px solid #eee',boxShadow: '0 6px 8px #0001'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
         
          
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          
      
      
                <Link className="decoration" to="/">
                <Button
                color="inherit"
                size="large"
                className="btn.btn-primary"
                startIcon={<EventNoteIcon/>}>
                   PSP - Strategic Planner
                 </Button>
                </Link> 


          </Typography>
          <div>
            {Auth.loggedIn() ? (
              <>
                <Link  className="decoration" to="/profile">
                <Button
                color="inherit"
                size="large"
                className={classes.button}
                startIcon={<AccountCircle />}>
                   Profile
                 </Button>
                </Link>

                <Link  className="decoration" to="/Swot">
                <Button
                color="inherit"
                size="large"
                className={classes.button}
                startIcon={<BusinessCenterIcon />}>
                   Swot
                 </Button>
                </Link>

                <Link  className="decoration" to="/BalanceWheel">
                <Button
                color="inherit"
                size="large"
                className={classes.button}
                startIcon={<AdjustIcon />}>
                   Wheel
                 </Button>
                </Link>

                <Link className="decoration" to="/">
                <Button
                color="inherit"
                size="large"
                onClick={logout}
                className={classes.button}
                startIcon={<ExitToAppIcon />}>
                   Logout
                 </Button>
                </Link>
              </>
            ):(
              <>
                
                <Link className="decoration" to="/login">
                <Button
                color="inherit"
                size="large"
                className={classes.button}
                startIcon={<VpnKeyIcon/>}>
                   Login
                 </Button>
                </Link>

                <Link className="decoration" to="/signup">
                <Button
                color="inherit"
                size="large"
                className={classes.button}
                startIcon={<AssignmentIndIcon/>}>
                   Signup
                 </Button>
                </Link>

              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
    </Container>
  );
}
