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

const MovieDetails = ({ movies }) => {
  const classes = useStyles();
  const { movieId } = useParams();

  const currentMovie = movies.find(
    (movie) => movie.episode_id === movieId,
  );

  return !currentMovie ? (
    <h3>You didn't specified the movie!</h3>
  ) : (
    <>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <MovieIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`Title: ${currentMovie.title}`} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <VideocamIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Director: ${currentMovie.director}`}
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
            primary={`Producer(s): ${currentMovie.producer}`}
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
            primary={`Release Date: ${currentMovie.release_date}`}
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

export default MovieDetails;
