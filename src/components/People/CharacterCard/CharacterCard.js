import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, Typography } from '@material-ui/core/';
import useStyles from './styles';

const CharacterCard = ({ character: { name, url } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link
        to={`people${
          isNaN(url[url.length - 3]) ? url.slice(-3) : url.slice(-4)
        }`}
        className={classes.link}
      >
        <CardContent>
          <Typography
            className={classes.name}
            variant="h5"
            align="center"
            gutterBottom
          >
            {name}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CharacterCard;
