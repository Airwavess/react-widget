import React from "react";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import Album, { getStaticProps } from "../../pages/index";

jest.mock("axios");

describe("Album component testing", () => {
  const images = [
    {
      id: "image1",
      url: "test.jpg",
      title: "test image",
      content: "test image content",
    },
  ];
  const videos = [
    {
      id: "video1",
      url: "test.mp4",
      title: "test video",
      content: "test video content",
    },
  ];

  test("loads and displays cards image", () => {
    render(<Album images={images} />);

    expect(screen.getByText(images[0].title)).toBeDefined();
    expect(screen.getByText(images[0].content)).toBeDefined();
  });

  test("loads and displays cards video", () => {
    render(<Album videos={videos} />);

    expect(screen.getByText(videos[0].title)).toBeDefined();
    expect(screen.getByText(videos[0].content)).toBeDefined();
  });

  describe("getStaticProps testing", () => {
    test("return correct data", async () => {
      axios.get.mockImplementation((url) => {
        switch (url) {
          case "https://pdc2.csie.ncu.edu.tw:8888/api/v1/images":
            return { data: images };
            break;
          case "https://pdc2.csie.ncu.edu.tw:8888/api/v1/videos":
            return { data: videos };
            break;
          default:
            break;
        }
      });
      const response = await getStaticProps();
      expect(response).toStrictEqual({ props: { images, videos } });
    });
  });
});
