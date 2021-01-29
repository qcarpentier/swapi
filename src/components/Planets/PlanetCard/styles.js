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
    color: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(40, 40, 40)',
    borderRadius: '5px',
    border: '1px solid',
    borderColor: '#ffe81f',
    height: '100%',
    position: 'relative',
    '&:hover': {
      backgroundColor: 'rgb(70, 70, 70)',
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
