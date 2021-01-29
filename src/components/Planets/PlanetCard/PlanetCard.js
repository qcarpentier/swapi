import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, Typography } from '@material-ui/core/';
import useStyles from './styles';

const PlanetCard = ({ name, url }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link
        to={`planets/${
          isNaN(url[url.length - 3]) ? url.slice(-2) : url.slice(-3)
        }`}
        className={classes.link}
      >
        <CardContent>
          <Typography
            className={classes.title}
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

export default PlanetCard;
