import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const NavBar = () => {
  
  return (
    <div>
      <AppBar position = "static">
        <Toolbar>
          <Typography variant = "h4" component = "h1">
            <Link href = '/' color = 'inherit'>Recipe Finder</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
