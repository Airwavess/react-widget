import { getVideos } from "../../../../lib/videoDB";

export default function videoHandler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      const video = getVideos().find((i) => i.id === id);
      res.status(200).json({ ...video });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
