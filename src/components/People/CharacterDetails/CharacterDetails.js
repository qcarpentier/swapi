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

const CharacterDetails = ({ people }) => {
  const classes = useStyles();
  const { id } = useParams();

  // NEED FIX: Logs are never in console > comp not called? Route path?
  console.log('CharacterDetails');
  console.log(people);
  console.log(id);

  const currentCharacter = people.find((char) =>
    isNaN(char.url[char.url.length - 3])
      ? char.url.slice(-3) === id
      : char.url.slice(-4) === id,
  );

  console.log(currentCharacter);

  return !currentCharacter ? (
    <h3>You didn't specified a character!</h3>
  ) : (
    <>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <MovieIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`Name: ${currentCharacter.name}`} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <VideocamIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`Height: ${currentCharacter}`} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <GroupIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`Mass: ${currentCharacter}`} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <CalendarTodayIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Hair Color:
            : ${currentCharacter}`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <CalendarTodayIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Skin Color:
            : ${currentCharacter}`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <CalendarTodayIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Gender:
            : ${currentCharacter}`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <CalendarTodayIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Birth Year:
            : ${currentCharacter}`}
          />
        </ListItem>
      </List>
      <Link to="/people" className={classes.link}>
        <Button variant="contained" className={classes.button}>
          Back
        </Button>
      </Link>
    </>
  );
};

export default CharacterDetails;
