import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

describe("Counter Component Tests", () => {
  test("renders initial count as 0", () => {
    render(<Counter />);
    const countText = screen.getByTestId("count-value");
    expect(countText).toHaveTextContent("Count: 0");
  });

  test("increments count when Increase button is clicked", () => {
    render(<Counter />);
    const increaseBtn = screen.getByText("Increase");

    fireEvent.click(increaseBtn);

    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 1");
  });

  test("decrements count when Decrease button is clicked", () => {
    render(<Counter />);
    const decreaseBtn = screen.getByText("Decrease");

    fireEvent.click(decreaseBtn);

    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: -1");
  });

  test("multiple increments work correctly", () => {
    render(<Counter />);
    const increaseBtn = screen.getByText("Increase");

    fireEvent.click(increaseBtn);
    fireEvent.click(increaseBtn);
    fireEvent.click(increaseBtn);

    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 3");
  });

  test("increment and decrement together", () => {
    render(<Counter />);
    const increaseBtn = screen.getByText("Increase");
    const decreaseBtn = screen.getByText("Decrease");

    fireEvent.click(increaseBtn);
    fireEvent.click(increaseBtn);
    fireEvent.click(decreaseBtn);

    expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 1");
  });
});
