import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, Typography } from '@material-ui/core/';
import useStyles from './styles';

const MovieCard = ({ movie: { title, episode_id }, setMovieId }) => {
  const classes = useStyles();

  console.log(title);

  return (
    <Card className={classes.card}>
      <Link
        to={`movies/${episode_id}`}
        className={classes.link}
        onClick={() => setMovieId(episode_id)}
      >
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
