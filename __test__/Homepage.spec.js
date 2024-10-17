import { render, screen } from "@testing-library/react";
import HomePage from "../src/app/page";

describe("Homepage", () => {
  it("Render the page", () => {
    render(<HomePage />);

    const element = screen.getByRole("heading", {
      level: 1,
    });
    expect(element).toBeInTheDocument();
  });

  it("render with a paragraph", () => {
    render(<HomePage />);

    const element = screen.getByRole("paragraph");
    expect(element).toBeInTheDocument();
  });
});
