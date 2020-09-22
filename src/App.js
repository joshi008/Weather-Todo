import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Weather from "./Weather";
import TodoList from "./TodoList";
import { AppBar, Avatar, Container, IconButton, Toolbar } from '@material-ui/core';
import { GrMail } from 'react-icons/gr'
import { TiWeatherSnow } from 'react-icons/ti'
import { SiLinkedin } from 'react-icons/si'

const images = [
  {
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1140&q=80',
    title: 'Weather_App',
    width: '30%',
  },
  {
    url: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1092571024%2F960x0.jpg%3Ffit%3Dscale',
    title: 'To-Do_App',
    width: '30%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    objectFit: "contain",
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));



function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
        <AppBar position="static" className="bar">
          <Container maxWidth="lg">
            <Toolbar>
              <Link to={"/"}>
                <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
                  <TiWeatherSnow className="profile" />
                </IconButton>
              </Link>
              <div style={{ flex: 1 }}>
                <Typography variant="h6" className={classes.title}  >
                  WeatherTodo
          </Typography>
              </div>
              {/* <Button color="inherit">Login</Button> */}
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  edge="end"
                  // onClick={}
                  color="inherit"
                  onClick={() => window.open('mailto: joshi.hrishabh@gmail.com')}
                  className="ic"
                >
                  <GrMail />
                </IconButton>

                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  edge="end"
                  // onClick={}
                  color="inherit"
                  onClick={() => window.open('https://www.linkedin.com/in/hrishabh-joshi-39267718b/')}
                  className="ic"
                >
                  <SiLinkedin />
                </IconButton>
              </div>
            </Toolbar>
          </Container>
        </AppBar>


        <div className="{classes.root} button">
          <center>
            {images.map((image) => (
              <Link to={"/" + image.title}>
                <ButtonBase
                  focusRipple
                  key={image.title}
                  className={classes.image}
                  focusVisibleClassName={classes.focusVisible}
                  style={{
                    width: image.width,
                    margin: `1%`,
                  }}
                >
                  <span
                    className={classes.imageSrc}
                    style={{
                      backgroundImage: `url(${image.url})`,
                    }}
                  />
                  <span className={classes.imageBackdrop} />
                  <span className={classes.imageButton}>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      className={classes.imageTitle}
                    >
                      {image.title}
                      < span className={classes.imageMarked} />
                    </Typography>
                  </span>
                </ButtonBase>
              </Link>
            ))
            }
          </center >
        </div >
        <Switch>
          <Route path="/Weather_App">
            <Weather />
          </Route>
          <Route path="/To-Do_App">
            <TodoList />
          </Route>
        </Switch>
      </Router>


    </div >
  );
}

export default App;
