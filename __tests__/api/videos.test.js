jest.mock("../../lib/videoDB");

import videos from "../../pages/api/v1/videos";
import { getVideos } from "../../lib/videoDB";

describe("Videos API route", () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn(() => res),
      json: jest.fn(() => res),
      end: jest.fn(),
      setHeader: jest.fn(),
    };

    getVideos.mockClear();
  });

  test("Should return 405 if the method is not GET", async () => {
    req.method = "POST";

    videos(req, res);

    expect(res.status).toBeCalledWith(405);
    expect(res.end).toHaveBeenCalledTimes(1);
    expect(res.setHeader).toHaveBeenCalledTimes(1);
  });

  test("Should return 200 if the method is GET", async () => {
    req.method = "GET";

    videos(req, res);

    expect(res.status).toBeCalledWith(200);
  });

  test("Should return correct data if the method is GET", async () => {
    getVideos.mockReturnValue({ data: "data" });
    req.method = "GET";

    videos(req, res);

    expect(getVideos).toHaveBeenCalledTimes(1);
    expect(res.json).toBeCalledWith({ data: "data" });
  });
});
