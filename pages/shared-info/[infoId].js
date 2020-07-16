import axios from "axios";
import InfoCard from "../../components/InfoCard";
import { getImagesId } from "../../lib/imageDB";
import { getVideosId } from "../../lib/videoDB";
import { API_HOST } from "../../src/config";

const SharedContent = (props) => {
  return <InfoCard {...props} style={{ height: "100vh", borderRadius: "0" }} />;
};

export async function getStaticPaths() {
  const imagesId = getImagesId();
  const videosId = getVideosId();
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
