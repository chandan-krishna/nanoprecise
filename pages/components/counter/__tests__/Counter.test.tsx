import { render, screen, act, fireEvent } from "@testing-library/react";
import { Counter } from "../Counter";

describe("<Counter /> pages/components/counter/__tests__/Counter.test.tsx", () => {
  it("Should render heading properly", () => {
    render(<Counter />);
    const heading = screen.getByText("Basic Counter Application");
    expect(heading).toBeInTheDocument();
  });

  it("Should show default count value as zero properly", () => {
    render(<Counter />);
    const countInfo = screen.getByText("Count: 0");
    expect(countInfo).toBeInTheDocument();
  });

  it("Should increment count value properly", () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId("counter-count-increment");

    act(() => {
      fireEvent.click(incrementBtn);
    });

    expect(screen.getByText("Count: 1")).toBeInTheDocument();

    act(() => {
      fireEvent.click(incrementBtn);
      fireEvent.click(incrementBtn);
      fireEvent.click(incrementBtn);
    });

    expect(screen.getByText("Count: 4")).toBeInTheDocument();
  });

  it("Should decrement count value properly", () => {
    render(<Counter />);
    const decrementBtn = screen.getByTestId("counter-count-decrement");

    act(() => {
      fireEvent.click(decrementBtn);
    });

    expect(screen.getByText("Count: -1")).toBeInTheDocument();

    act(() => {
      fireEvent.click(decrementBtn);
      fireEvent.click(decrementBtn);
      fireEvent.click(decrementBtn);
    });

    expect(screen.getByText("Count: -4")).toBeInTheDocument();
  });
});
