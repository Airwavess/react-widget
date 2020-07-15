jest.mock("../../../../lib/imageDB");

import images from "../images";
import { getImages } from "../../../../lib/imageDB";

describe("Images API route", () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn(() => res),
      json: jest.fn(() => res),
      end: jest.fn(),
      setHeader: jest.fn(),
    };

    getImages.mockClear();
  });

  test("Should return 405 if the method is not GET", async () => {
    req.method = "POST";

    images(req, res);

    expect(res.status).toBeCalledWith(405);
    expect(res.end).toHaveBeenCalledTimes(1);
    expect(res.setHeader).toHaveBeenCalledTimes(1);
  });

  test("Should return 200 if the method is GET", async () => {
    req.method = "GET";

    images(req, res);

    expect(res.status).toBeCalledWith(200);
  });

  test("Should return correct data if the method is GET", async () => {
    getImages.mockReturnValue({ data: "data" });
    req.method = "GET";

    images(req, res);

    expect(getImages).toHaveBeenCalledTimes(1);
    expect(res.json).toBeCalledWith({ data: "data" });
  });
});
