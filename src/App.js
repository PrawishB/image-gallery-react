import React from 'react';
import './App.css';
import BackgroundImage from './assets/bg-image.jpg';

import { makeStyles } from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import Theme from './components/Theme';
import Content from './components/Content';

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100vw"
  },
  background: {
    position: "fixed",
    heigth: "200%",
    width: "200%",
    pointerEvents: "none",
    zIndex: "-1"
  },
  grayscale: {
    WebkitFilter: "grayscale(100%)"
  }
});

const App = () => {

  const classes = useStyles();

  return (
    <ThemeProvider theme={Theme}>
      <div className={classes.container}>
        <div className={classes.background}>
          <img className={classes.grayscale} src={BackgroundImage} alt="Grayscale Background" />
        </div>
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
