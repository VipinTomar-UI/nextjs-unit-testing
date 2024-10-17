import { fireEvent, render, screen } from "@testing-library/react";
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
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(incrementBtn);

    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementBtn);

    expect(element).toBeInTheDocument();
  });
});
