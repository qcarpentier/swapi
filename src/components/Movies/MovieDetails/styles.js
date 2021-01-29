import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    width: '50%',
    margin: 'auto',
    backgroundColor: 'rgb(45, 45, 45)',
    borderRadius: '5px',
    border: '1px solid',
    borderColor: '#ffe81f',
  },
  avatar: {
    color: '#fff',
    backgroundColor: 'rgb(40, 40, 40)',
  },
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
}));
