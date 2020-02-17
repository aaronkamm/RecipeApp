import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  homeComponent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh'
  }
});

const Welcome = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeComponent}>
      <div>
        <Typography align="center" style={{ fontSize: '40px' }}>
          Welcome!
        </Typography>
        <Typography style={{ fontSize: '16px' }} variant="subtitle1">
          Get all your favorite recipes here{' '}
          <span role="img" aria-label="emojis">
            🍔😋
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default Welcome;
