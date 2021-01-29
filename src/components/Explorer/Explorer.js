import React, { useEffect } from 'react';
import { ButtonBase, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';

import useStyles from './styles';

const images = [
  {
    url:
      'https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/8/-/8-4114_star_wars_movie_poster_wide_ma.jpg',
    title: 'Movies',
    width: '33%',
  },
  {
    url:
      'https://www.gannett-cdn.com/-mm-/de60c3feeee6b514079402894bf7a2f4d3232bc4/c=0-149-2964-1824/local/-/media/2017/05/23/USATODAY/USATODAY/636311489790330060-XXX-EMPIRESTRIKESBACK-EP5-KEY-187-R-DCB-78029870.JPG?width=1600&height=800&fit=crop&format=pjpg&auto=webp',
    title: 'People',
    width: '33%',
  },
  {
    url:
      'https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg',
    title: 'Planets',
    width: '33%',
  },
];

const Explorer = ({ setPageTitle }) => {
  const classes = useStyles();

  // Set "Explorer" as default page title
  useEffect(() => {
    setPageTitle('Explorer');
  }, [setPageTitle]);

  return (
    <>
      <div className={classes.root}>
        {images.map((image) => (
          <Link
            to={`/${image.title.toLowerCase()}`}
            onClick={() => setPageTitle(`${image.title}`)}
          >
            <ButtonBase
              focusRipple
              key={image.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width,
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Explorer;
