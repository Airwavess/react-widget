import axios from "axios";
import InfoCard from "../../components/InfoCard";
import { getImagesId } from "../../lib/imageDB";
import { getVideosId } from "../../lib/videoDB";

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
    api = "https://pdc2.csie.ncu.edu.tw:8888/api/v1/image/" + id;
  } else if (id.includes("video")) {
    api = "https://pdc2.csie.ncu.edu.tw:8888/api/v1/video/" + id;
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
