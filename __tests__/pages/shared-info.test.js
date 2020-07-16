import React from "react";
import axios from "axios";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import SharedInfo, { getStaticProps } from "../../pages/shared-info/index";

jest.mock("axios");

describe("Shared-info testing", () => {
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

  test("Should render content correctly", () => {
    render(<SharedInfo images={images} videos={videos} />);

    expect(screen.getByText(images[0].title)).toBeDefined();
    expect(screen.getByText(images[0].content)).toBeDefined();
    expect(screen.getByText(videos[0].title)).toBeDefined();
    expect(screen.getByText(videos[0].content)).toBeDefined();
  });

  describe("Dialog testing", () => {
    test("Should popup dialog after clicking 'share' button on image card", () => {
      render(<SharedInfo images={images} />);

      // open dialog
      fireEvent.click(screen.getByText("Share"));

      const expectedUrl =
        "https://pdc2.csie.ncu.edu.tw:8888/shared-info/image1";
      expect(screen.getByDisplayValue(expectedUrl)).toBeDefined();
    });

    test("Should popup dialog after clicking 'share' button on image card", () => {
      render(<SharedInfo videos={videos} />);

      // open dialog
      fireEvent.click(screen.getByText("Share"));

      const expectedUrl =
        "https://pdc2.csie.ncu.edu.tw:8888/shared-info/video1";
      expect(screen.getByDisplayValue(expectedUrl)).toBeDefined();
    });

    test("dialog no longer present in DOM", async () => {
      render(<SharedInfo videos={videos} />);

      // open dialog
      fireEvent.click(screen.getByText("Share"));
      await waitFor(() =>
        expect(screen.getByRole("presentation")).toBeInTheDocument()
      );

      // close dialog
      const dialogContainer = screen.getByRole("presentation");
      fireEvent.click(dialogContainer.firstChild);

      await waitForElementToBeRemoved(() => screen.getByRole("presentation"));
    });
  });
});
