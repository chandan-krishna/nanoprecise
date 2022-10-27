import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

describe("HelloWorld", () => {
  it("renders a heading", () => {
    render(<HelloWorld />);
    const heading = screen.queryByText("Hello World");
    expect(heading).toBeInTheDocument();
  });
});
