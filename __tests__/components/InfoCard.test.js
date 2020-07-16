import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import InfoCard from "../../components/InfoCard";

describe("InfoCard testing", () => {
  test("Should show the correct content", () => {
    const data = {
      id: "test-id-1",
      title: "test-title",
      content: "test-content",
      url: "image.png",
    };

    render(<InfoCard {...data} />);

    expect(screen.getByText(data.title)).toBeDefined();
    expect(screen.getByText(data.content)).toBeDefined();
    expect(screen.getByTitle("card-iframe")).toHaveAttribute("src", data.url);
  });

  test("Should correctly fire the openModal function", () => {
    const openModal = jest.fn();

    render(<InfoCard id={"test-id"} openModal={openModal} sharedLink />);

    fireEvent.click(screen.getByText("Share"));

    expect(openModal).toBeCalledTimes(1);
    expect(openModal).toBeCalledWith("test-id");
  });
});
