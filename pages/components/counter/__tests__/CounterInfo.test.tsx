import { render, screen } from "@testing-library/react";
import { CounterInfo } from "../CounterInfo";

describe("<CounterInfo /> pages/components/counter/__tests__/CounterInfo.test.tsx", () => {
  it("Should render count value properly", () => {
    render(<CounterInfo count={10} />);
    const countInfo = screen.getByText("Count: 10");
    expect(countInfo).toBeInTheDocument();
  });
});
