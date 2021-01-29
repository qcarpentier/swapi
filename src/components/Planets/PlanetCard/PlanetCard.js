import React from 'react';
import { Link } from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Button,
  Card,
} from '@material-ui/core';

import PublicIcon from '@material-ui/icons/Public';
import TerrainIcon from '@material-ui/icons/Terrain';
import PeopleIcon from '@material-ui/icons/People';

import useStyles from './styles';

const PlanetCard = ({ planet: { name, terrain, population } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <PublicIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`Name: ${name}`} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <TerrainIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`Terrain: ${terrain}`} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <PeopleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`population: ${population}`} />
        </ListItem>
      </List>
    </Card>
  );
};

export default PlanetCard;
