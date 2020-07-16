import { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import NavBar from "../../components/NavBar";
import InfoCard from "../../components/InfoCard";
import SharedLinkModal from "../../components/SharedLinkModal";
import { HOST, API_HOST } from "../../src/config";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardGroupName: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const SharedInfo = ({ images = [], videos = [] }) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [embedUrl, setEmbedUrl] = useState("");

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = (id) => {
    const url = `${HOST}/shared-info/${id}`;
    setEmbedUrl(url);
    setOpenModal(true);
  };

  return (
    <>
      <NavBar />
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
          >
            Shareable content
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            You can click "share" button to get a shared link.
          </Typography>
        </Container>

        <Container className={classes.cardGrid} maxWidth="md">
          <Typography
            variant="h4"
            color="textPrimary"
            className={classes.cardGroupName}
          >
            Shareable image content
          </Typography>
          <Grid container spacing={4}>
            {images.map((image) => (
              <Grid item key={image.id} xs={12} sm={6} md={4}>
                <InfoCard {...image} openModal={handleOpenModal} sharedLink />
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="h4"
            color="textPrimary"
            className={classes.cardGroupName}
          >
            Shareable video content
          </Typography>
          <Grid container spacing={4}>
            {videos.map((video) => (
              <Grid item key={video.id} xs={12} sm={6} md={4}>
                <InfoCard {...video} openModal={handleOpenModal} sharedLink />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <SharedLinkModal
        open={openModal}
        onClose={handleCloseModal}
        embedUrl={embedUrl}
      />
    </>
  );
};

export async function getStaticProps() {
  const IMAGES_API = `${API_HOST}/api/v1/images`;
  const VIDEOS_API = `${API_HOST}/api/v1/videos`;

  const reqImage = axios.get(IMAGES_API);
  const reqVideo = axios.get(VIDEOS_API);

  let images, videos;
  await Promise.all([reqImage, reqVideo]).then((res) => {
    images = res[0].data;
    videos = res[1].data;
  });

  return {
    props: {
      images,
      videos,
    },
  };
}

export default SharedInfo;
