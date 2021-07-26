import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    borderRadius: '25px',
    boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
  },
  media: {
    height: 260,
    
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    fontWeight:'bolder',
    alignItems: 'center',
  },
}));
