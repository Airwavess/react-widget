import React from "react";
import axios from "axios";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Album, { getStaticProps } from "../pages/index";

jest.mock("axios");

describe("Album component testing", () => {
  const images = [
    {
      id: "image1",
      url:
        "https://pdc2.csie.ncu.edu.tw:8888/images/jerry-zhang-y8lcotrghpe-unspla.jpg",
      title: "Jerry Zhang image",
      content: "Jerry Zhang",
    },
  ];
  const videos = [
    {
      id: "video1",
      url: "https://pdc2.csie.ncu.edu.tw:8888/videos/Pexels Videos 1539953.mp4",
      title: "Jerry Zhang video",
      content: "Jerry Zhang",
    },
  ];
  test("loads and displays cards image", () => {
    render(<Album images={images} />);

    expect(screen.getByText("Jerry Zhang image")).toBeDefined();
  });

  test("loads and displays cards video", () => {
    render(<Album videos={videos} />);

    expect(screen.getByText("Jerry Zhang video")).toBeDefined();
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
