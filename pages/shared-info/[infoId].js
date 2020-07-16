import axios from "axios";
import InfoCard from "../../components/InfoCard";
import { API_HOST } from "../../src/config";

const SharedContent = (props) => {
  return <InfoCard {...props} style={{ height: "100vh", borderRadius: "0" }} />;
};

export async function getStaticPaths() {
  const IMAGES_API = `${API_HOST}/api/v1/images`;
  const VIDEOS_API = `${API_HOST}/api/v1/videos`;

  const reqImage = axios.get(IMAGES_API);
  const reqVideo = axios.get(VIDEOS_API);

  let imagesId, videosId;
  await Promise.all([reqImage, reqVideo]).then((res) => {
    imagesId = res[0].data.map((i) => i.id);
    videosId = res[1].data.map((v) => v.id);
  });

  const dataSrcId = [...imagesId, ...videosId];

  return {
    paths: dataSrcId.map((id) => ({
      params: { infoId: id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.infoId;
  let api;
  if (id.includes("image")) {
    api = `${API_HOST}/api/v1/images/${id}`;
  } else if (id.includes("video")) {
    api = `${API_HOST}/api/v1/videos/${id}`;
  }
  const res = await axios.get(api);
  const data = res.data;

  return {
    props: {
      ...data,
    },
  };
}

export default SharedContent;
