import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../src/app/components/Button";

describe("Button Component", () => {
  it("Render the button", () => {
    render(<Button>Click me</Button>);

    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });

  test("renders children and handles click events", () => {
    render(<Button>Click me</Button>);

    const buttonElement = screen.getByText(/Click me0/i);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent("Click me1");

    fireEvent.click(buttonElement);
    expect(buttonElement).not.toHaveTextContent("Click me1");
  });
});
