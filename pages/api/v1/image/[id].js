import { getImages } from "../../../../lib/imageDB";

export default function imageHandler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      const image = getImages().find((i) => i.id === id);
      res.status(200).json({ ...image });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
