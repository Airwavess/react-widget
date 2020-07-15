import { getImages } from "../../../lib/imageDB";

export default (req, res) => {
  res.status(200).json(getImages());
};
