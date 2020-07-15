import { getImages } from "../../../lib/imageDB";

export default (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(getImages());
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
