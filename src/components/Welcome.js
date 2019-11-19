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
    <React.Fragment>
      <section className = {classes.welcome}>
        <Typography variant = "h3" component = "h1">
          Welcome!
        </Typography>
      </section>
      <section className = {classes.welcome}>
        <Typography variant = 'subtitle1' component = 'h6'>
          Get all your favorite recipes here 🍔🍞😋
        </Typography>
      </section>
    </React.Fragment>
  )
}

export default Welcome;