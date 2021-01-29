import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  button: {
    color: '#fff',
    backgroundColor: 'rgb(40, 40, 40)',
    display: 'flex',
    margin: 'auto',
    marginTop: '30px',
    '&:hover': {
      backgroundColor: 'rgb(70, 70, 70)',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});
