import { getImages, getImagesId } from "../../lib/imageDB";
import * as data from "../../lib/data";

describe("imageDB library testing", () => {
  describe("test getImages", () => {
    test("Return correct data", () => {
      data.imageData = { data: "data" };

      const response = getImages();

      expect(response).toStrictEqual({ data: "data" });
    });
  });

  describe("test getImagesId", () => {
    data.imageData = [{ id: 1 }, { id: 2 }];

    const response = getImagesId();

    expect(response).toStrictEqual([1, 2]);
  });
});
