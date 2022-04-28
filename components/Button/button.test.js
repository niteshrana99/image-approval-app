import Button from ".";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";


describe("Button", () => {
  it("renders a Button", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("should call onClick handler function", () => {
    const handleClick = jest.fn();
    const { container } = render(<Button onClick={handleClick}>Test Button</Button>)
    const button = container.querySelector('button');
    act(() => {
      fireEvent.click(button);
    });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
})