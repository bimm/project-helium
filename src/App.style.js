import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  introSection: {
    flex: 1,
    backgroundColor: '#314053',
  },
  applySection: {
    flex: 1,
    backgroundColor: '#434c56',
    paddingTop: '75px',
    paddingBottom: '45px',
  },
  businessSection: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: '75px',
    paddingBottom: '45px',
  },
  footerSection: {
    flex: 1,
    backgroundColor: '#EC6723',
    paddingTop: '50px',
    paddingBottom: '45px',
  },
  copy: {
    '@media only screen and (max-width: 960px)': {
      textAlign: 'center',
    },
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    paddingTop: '50px',
    marginBottom: '50px',
    '@media only screen and (min-width: 960px)': {
      paddingTop: '100px',
    },
  },
  applyNowImage: {
    maxWidth: '100%',
    height: 'auto',
    margin: '0 auto',
    marginBottom: '40px',
  },
  instagramImage: {
    maxWidth: '100%',
    height: 'auto',
    margin: '0 auto',
  },
  largeIcon: {
    fontSize: '100px !important',
    textAlign: 'center',
  },
  exampleImageContainer: {
    width: '100%',
    backgroundColor: '#cccccc',
  },
});

export default useStyles;
