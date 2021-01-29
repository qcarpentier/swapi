import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

import logo from '../../images/Star_Wars_logo.png';

import useStyles from './styles';

const Header = ({ pageTitle, setPageTitle }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className={classes.appBar} position="static">
      <Link to="/">
        <img
          src={logo}
          className={classes.img}
          alt="Star Wars logo"
        />
      </Link>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4">{pageTitle}</Typography>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link
            to="/"
            onClick={() => setPageTitle('Explorer')}
            className={classes.link}
          >
            <MenuItem onClick={handleClose}>Explorer</MenuItem>
          </Link>
          <Link
            to="/movies"
            onClick={() => setPageTitle('Movies')}
            className={classes.link}
          >
            <MenuItem onClick={handleClose}>Movies</MenuItem>
          </Link>
          <Link
            to="/people"
            onClick={() => setPageTitle('People')}
            className={classes.link}
          >
            <MenuItem onClick={handleClose}>People</MenuItem>
          </Link>
          <Link
            to="/planets"
            onClick={() => setPageTitle('Planets')}
            className={classes.link}
          >
            <MenuItem onClick={handleClose}>Planets</MenuItem>
          </Link>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
