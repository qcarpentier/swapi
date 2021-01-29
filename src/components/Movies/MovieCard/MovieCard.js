import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, Typography } from '@material-ui/core/';
import useStyles from './styles';

const MovieCard = ({ movie: { title, episode_id } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to={`movies/${episode_id}`} className={classes.link}>
        <CardContent>
          <Typography
            className={classes.title}
            variant="h5"
            align="center"
            gutterBottom
          >
            {title}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default MovieCard;
