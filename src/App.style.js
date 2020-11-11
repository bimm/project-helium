import { makeStyles } from '@material-ui/core/styles';

const curvedSectionsAmount = '100%';

const useStyles = makeStyles({
  introSection: {
    flex: 1,
    backgroundColor: '#314053',
    paddingBottom: '45px',
    '&::after': {
      content: `''`,
      width: '100%',
      height: '50px',
      position: 'absolute',
      left: 0,
      right: 0,
      backgroundColor: '#434c56',
      margin: 'auto',
      '@media only screen and (max-width: 960px)': {
        borderTopRightRadius: curvedSectionsAmount,
        borderTopLeftRadius: curvedSectionsAmount,
      },
    },
  },
  applySection: {
    flex: 1,
    backgroundColor: '#434c56',
    paddingTop: '20px',
    paddingBottom: '45px',
    '&::after': {
      content: `''`,
      width: '100%',
      height: '50px',
      position: 'absolute',
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      margin: 'auto',
      '@media only screen and (max-width: 960px)': {
        borderTopRightRadius: curvedSectionsAmount,
        borderTopLeftRadius: curvedSectionsAmount,
      },
    },
  },
  businessSection: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: '20px',
    paddingBottom: '45px',
    '&::after': {
      content: `''`,
      width: '100%',
      height: '50px',
      position: 'absolute',
      left: 0,
      right: 0,
      backgroundColor: '#EC6723',
      margin: 'auto',
      '@media only screen and (max-width: 960px)': {
        borderTopRightRadius: curvedSectionsAmount,
        borderTopLeftRadius: curvedSectionsAmount,
      },
    },
  },
  footerSection: {
    flex: 1,
    backgroundColor: '#EC6723',
    paddingTop: '20px',
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
    margin: '0 auto',
    marginTop: '50px',
    marginBottom: '50px',
    '@media only screen and (max-width: 960px)': {
      marginTop: '80px',
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
