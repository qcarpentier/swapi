import React from 'react';
import { useParams } from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Button,
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import MovieIcon from '@material-ui/icons/Movie';
import GroupIcon from '@material-ui/icons/Group';
import VideocamIcon from '@material-ui/icons/Videocam';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import useStyles from './styles';

const PlanetDetails = ({ planets }) => {
  const classes = useStyles();
  const { planetId } = useParams();

  console.log('PlanetDetails');
  console.log(planets);

  const currentPlannet = planets.find((planet) =>
    isNaN(planet.url[planet.url.length - 3])
      ? planet.url.slice(-3) === planetId
      : planet.url.slice(-4) === planetId,
  );

  return !currentPlannet ? (
    <h3>You didn't specified the planet!</h3>
  ) : (
    <>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <MovieIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`Title: ${currentPlannet.title}`} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <VideocamIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Director: ${currentPlannet.director}`}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <GroupIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Producer(s): ${currentPlannet.producer}`}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <CalendarTodayIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Release Date: ${currentPlannet.release_date}`}
          />
        </ListItem>
      </List>
      <Link to="/movies" className={classes.link}>
        <Button variant="contained" className={classes.button}>
          Back
        </Button>
      </Link>
    </>
  );
};

export default PlanetDetails;
