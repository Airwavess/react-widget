import { getVideos, getVideosId } from "../lib/videoDB";
import * as data from "../lib/data";

describe("videoDB library testing", () => {
  describe("test getVideos", () => {
    test("Return correct data", () => {
      data.videoData = { data: "data" };

      const response = getVideos();

      expect(response).toStrictEqual({ data: "data" });
    });
  });

  describe("test getVideosId", () => {
    data.videoData = [{ id: 1 }, { id: 2 }];

    const response = getVideosId();

    expect(response).toStrictEqual([1, 2]);
  });
});
