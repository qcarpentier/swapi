import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./styles";

const Header = ({ pageTitle }) => {
  const classes = useStyles();

  console.log(classes.headingTitle);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Typography variant="h3" className={classes.headingTitle}>
          Star Wars
        </Typography>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.pageTitle}>
            {pageTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
