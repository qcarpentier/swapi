import React from 'react';
import {
  List,
  Card,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Button,
} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HeightIcon from '@material-ui/icons/Height';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import FaceIcon from '@material-ui/icons/Face';
import AdbIcon from '@material-ui/icons/Adb';
import WcIcon from '@material-ui/icons/Wc';
import CakeIcon from '@material-ui/icons/Cake';

import useStyles from './styles';

const CharacterCard = ({
  character: {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    gender,
    birth_year,
  },
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={`${classes.avatar} ${classes.name}`}>
              <AccountCircleIcon />
            </Avatar>
          </ListItemAvatar>
          <h2 className={classes.name}>{`Name: ${name}`}</h2>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <HeightIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`Height: ${height}cm`} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <AccessibilityIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`Mass: ${mass}kg`} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <FaceIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Hair Color:
            : ${hair_color}`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <AdbIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Skin Color:
            : ${skin_color}`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <WcIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Gender:
            : ${gender}`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <CakeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Birth Year:
            : ${birth_year}`}
          />
        </ListItem>
      </List>
    </Card>
  );
};

export default CharacterCard;
