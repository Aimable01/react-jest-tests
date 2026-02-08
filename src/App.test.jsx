import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component Tests", () => {
  test("renders the main heading", () => {
    render(<App />);
    const heading = screen.getByText("React Jest Testing Demo");
    expect(heading).toBeInTheDocument();
  });

  test("renders Counter component", () => {
    render(<App />);
    const countText = screen.getByTestId("count-value");
    expect(countText).toBeInTheDocument();
    expect(countText).toHaveTextContent("Count: 0");
  });

  test("renders Increase and Decrease buttons", () => {
    render(<App />);
    expect(screen.getByText("Increase")).toBeInTheDocument();
    expect(screen.getByText("Decrease")).toBeInTheDocument();
  });
});
