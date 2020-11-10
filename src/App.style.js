import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  introSection: {
    flex: 1,
    backgroundColor: '#314053',
    paddingBottom: '140px',
    '&::after': {
      content: `''`,
      width: '100%',
      height: '150px',
      position: 'absolute',
      left: 0,
      right: 0,
      borderTopRightRadius: '50%',
      borderTopLeftRadius: '50%',
      backgroundColor: '#434c56',
      margin: 'auto',
    },
  },
  applySection: {
    flex: 1,
    backgroundColor: '#434c56',
    paddingTop: '20px',
    paddingBottom: '140px',
    '&::after': {
      content: `''`,
      width: '100%',
      height: '150px',
      position: 'absolute',
      left: 0,
      right: 0,
      borderTopRightRadius: '50%',
      borderTopLeftRadius: '50%',
      backgroundColor: '#fff',
      margin: 'auto',
    },
  },
  businessSection: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: '20px',
    paddingBottom: '140px',
    '&::after': {
      content: `''`,
      width: '100%',
      height: '150px',
      position: 'absolute',
      left: 0,
      right: 0,
      backgroundColor: '#EC6723',
      borderTopRightRadius: '50%',
      borderTopLeftRadius: '50%',
      margin: 'auto',
    },
  },
  footerSection: {
    flex: 1,
    backgroundColor: '#EC6723',
    paddingTop: '20px',
    paddingBottom: '50px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    margin: '0 auto',
    marginTop: '50px',
    marginBottom: '50px',
  },
  instagramImage: {
    maxWidth: '100%',
    height: 'auto',
    margin: '0 auto',
    marginBottom: '20px',
  },
  largeIcon: {
    fontSize: '100px',
    textAlign: 'center',
  },
  exampleImageContainer: {
    width: '100%',
    backgroundColor: '#cccccc',
  },
});

export default useStyles;
