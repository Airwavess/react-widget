import { videoData } from "./data";

export const getVideos = () => {
  return videoData;
};

export const getVideosId = () => {
  return videoData.map((d) => d.id);
};
