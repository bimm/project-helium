import useStyles from './App.style';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

// Icons
import Info from '@material-ui/icons/InfoOutlined';
import Contact from '@material-ui/icons/ContactSupportOutlined';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';

function App() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <section className={classes.introSection}>
        <Container maxWidth="md">
          <img
            src="/images/ProjectHeliumLogo.png"
            alt="Project Helium est. 2020"
            className={classes.image}
          />
          <Typography
            variant="h1"
            color="textSecondary"
            align="center"
            paragraph
          >
            We could all use a little lift
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            align="center"
            style={{ paddingBottom: '100px' }}
          >
            We believe now more than ever, entrepreneurs need something more
            tangible than hope. That’s why we want to work with you. For free.
          </Typography>
        </Container>
      </section>

      <section className={classes.applySection}>
        <Container maxWidth="md">
          <Typography
            variant="body1"
            color="textPrimary"
            align="center"
            paragraph
            style={{ marginBottom: '50px' }}
          >
            Local businesses that apply for Project Helium will be featured on
            our Instagram and Facebook pages. We’ll use this space to share your
            unique products, services and stories, creating a place for
            consumers to see all the businesses that shape their community.
          </Typography>
          <Grid container justify="center" spacing={3}>
            <Grid item sm={12} md={3}>
              <Box display="flex" justifyContent="center">
                <Info color="primary" className={classes.largeIcon} />
              </Box>
            </Grid>
            <Grid item sm={12} md={9}>
              <Typography variant="h3" color="textSecondary" gutterBottom>
                A bit about us:
              </Typography>
              <Typography variant="body1" color="textPrimary" paragraph>
                We’re BIMM, an award-winning, data-driven creative agency, based
                right here in Toronto.
              </Typography>
            </Grid>

            <Grid item sm={12} md={3}>
              <Box display="flex" justifyContent="center">
                <Contact color="primary" className={classes.largeIcon} />
              </Box>
            </Grid>
            <Grid item sm={12} md={9} style={{ marginBottom: '30px' }}>
              <Typography variant="h3" color="textSecondary" gutterBottom>
                What's in it for us?
              </Typography>
              <Typography variant="body1" color="textPrimary" paragraph>
                The chance to work with your incredible business to make
                compelling creative people remember.
              </Typography>
            </Grid>
          </Grid>
          <Box display="flex" alignItems="center" justifyContent="center">
            <img
              src="/images/HeliumIcon.png"
              alt="Helium Icon"
              className={classes.image}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ marginBottom: '30px' }}
          >
            <Button variant="contained" color="primary">
              Apply Now
            </Button>
          </Box>
          <Typography
            variant="body1"
            color="textPrimary"
            align="center"
            style={{ paddingBottom: '100px' }}
          >
            For general inquiries please reach out to us at:{' '}
            <Link href="mailto:projecthelium@bimm.com">
              projecthelium@bimm.com
            </Link>
          </Typography>
        </Container>
      </section>

      <section className={classes.businessSection}>
        <Container maxWidth="md">
          <Typography variant="h2" color="textSecondary" paragraph>
            Businesses that shape our communities
          </Typography>
          <Grid container justify="center" style={{ paddingBottom: '50px' }}>
            <Grid item sm={12} md={6}>
              <Box display="flex" justify="center">
                <img
                  src="https://via.placeholder.com/250x350"
                  alt="placeholder"
                  className={classes.instagramImage}
                />
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box
                display="flex"
                justify="center"
                alignItems="center"
                alignContent="center"
              >
                <img
                  src="https://via.placeholder.com/250x350"
                  alt="placeholder"
                  className={classes.instagramImage}
                />
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box display="flex" justify="center" alignItems="center">
                <img
                  src="https://via.placeholder.com/250x350"
                  alt="placeholder"
                  className={classes.instagramImage}
                />
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box display="flex" justify="center" alignItems="center">
                <img
                  src="https://via.placeholder.com/250x350"
                  alt="placeholder"
                  className={classes.instagramImage}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.footerSection}>
        <Container maxWidth="md">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Facebook className={classes.largeIcon} />
            <Instagram className={classes.largeIcon} />
          </Box>
        </Container>
      </section>
    </div>
  );
}

export default App;
