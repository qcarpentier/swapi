import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(200, 200, 200)',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    '&:hover': {
      backgroundColor: 'rgb(150, 150, 150)',
    },
  },
  grid: {
    display: 'flex',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});
