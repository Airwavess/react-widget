import axios from "axios";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const data = {
  image: "https://source.unsplash.com/random",
  title: "Lizard",
  content:
    "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
};

const Album = ({ images, videos }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <NavBar />
      <main>
        {/* hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* End hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {images.map((image) => (
              <Grid item key={image.id} xs={12} sm={6} md={4}>
                <InfoCard {...image} />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={4}>
            {videos.map((video) => (
              <Grid item key={video.id} xs={12} sm={6} md={4}>
                <InfoCard {...video} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </>
  );
};

export async function getStaticProps() {
  const IMAGES_API = "https://pdc2.csie.ncu.edu.tw:8888/api/v1/images";
  const VIDEOS_API = "https://pdc2.csie.ncu.edu.tw:8888/api/v1/videos";

  const reqImage = axios.get(IMAGES_API);
  const reqVideo = axios.get(VIDEOS_API);

  let images, videos;
  await Promise.all([reqImage, reqVideo]).then((res) => {
    images = res[0].data;
    videos = res[1].data;
    console.log(images, videos);
  });

  return {
    props: {
      images,
      videos,
    },
  };
}

export default Album;