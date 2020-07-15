import { getVideos } from "../../../lib/videoDB";

export default (req, res) => {
  res.status(200).json(getVideos());
};
