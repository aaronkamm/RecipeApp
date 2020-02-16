import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Search from './Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appTitle: {
    flexGrow: 1
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link href="/" color="inherit" className={classes.appTitle}>
              RecipeBot
            </Link>
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
