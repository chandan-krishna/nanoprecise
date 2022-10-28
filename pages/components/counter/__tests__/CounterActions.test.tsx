import { render, screen, act, fireEvent } from "@testing-library/react";
import { CounterActions } from "../CounterActions";

const mockHandleIncrement = jest.fn();
const mockHandleDecrement = jest.fn();

const props = {
  handleIncrement: mockHandleIncrement,
  handleDecrement: mockHandleDecrement,
};

describe("<CounterActions /> pages/components/counter/__tests__/CounterActions.test.tsx", () => {
  it("Should call handleIncrement properly", () => {
    render(<CounterActions {...props} />);
    const incrementBtn = screen.getByTestId("counter-count-increment");

    act(() => {
      fireEvent.click(incrementBtn);
    });

    expect(mockHandleIncrement).toBeCalled();
  });

  it("Should call handleDecrement properly", () => {
    render(<CounterActions {...props} />);
    const decrementBtn = screen.getByTestId("counter-count-decrement");

    act(() => {
      fireEvent.click(decrementBtn);
    });

    expect(mockHandleDecrement).toBeCalled();
  });
});
