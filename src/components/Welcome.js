import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  welcome: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    height: '50vh'
  }
})

const Welcome = () => {
  const classes = useStyles();
  return (
    <div className = {classes.welcome}>
        <div>
          <Typography align = 'center' variant = "h2" component = "h1">
            Welcome!
          </Typography>
          <Typography style = {{'fontSize': '1rem'}} variant = 'subtitle1'>
            Get all your favorite recipes here <span role = 'img' aria-label= 'emojis'>🍔🍞😋</span>
          </Typography>
        </div>
    </div>
  )
}

export default Welcome;