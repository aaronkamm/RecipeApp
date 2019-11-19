import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  welcome: {
    display: 'flex',
    justifyContent:'center'
  }
})

const Welcome = () => {
  const classes = useStyles();
  return (
    <section className = {classes.welcome}>
      <Typography variant = "h4" component = "h1">
        Welcome!
      </Typography>
    </section>
  )
}

export default Welcome;