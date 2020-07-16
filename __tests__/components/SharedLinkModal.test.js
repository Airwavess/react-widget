import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SharedLinkModal from "../../components/SharedLinkModal";

describe("SharedLinkModal testing", () => {
  test("copy embed url", () => {
    render(<SharedLinkModal open embedUrl="embed.url" />);

    const inputContainer = screen.getByDisplayValue("embed.url");

    inputContainer.addEventListener("copy", (e) => {
      const startIndex = e.target.selectionStart;
      const endIndex = e.target.selectionEnd;
      expect(e.target.value.substring(startIndex, endIndex)).toBe("embed.url");
    });

    fireEvent.focus(inputContainer);
    fireEvent.copy(inputContainer);
  });
});
