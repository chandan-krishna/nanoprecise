import { fireEvent, render, screen } from "@testing-library/react";
import ActionCard from "./ActionCard";

const mockAction = jest.fn();
const props = {
  icon: "ICON",
  title: "TITLE",
  description: "DESCRIPTION",
  actionText: "ACTION",
  action: mockAction,
};

const getRenderer = () => render(<ActionCard {...props} />);

describe("<ActionCard />", () => {
  it("Should render the title properly", () => {
    getRenderer();
    const titleElement = screen.getByText(props.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("Should render the description properly", () => {
    getRenderer();
    const descriptionElement = screen.getByText(props.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it("Should render the icon properly", () => {
    getRenderer();
    const iconElement = screen.getByTestId(props.icon);
    expect(iconElement).toBeInTheDocument();
  });

  it("Should render the action button properly", () => {
    getRenderer();
    const actionElement = screen.getByTestId("action-btn");
    expect(actionElement).toBeInTheDocument();
  });

  it("Should call the action properly", () => {
    getRenderer();
    const actionElement = screen.getByTestId("action-btn");
    fireEvent.click(actionElement);
    expect(mockAction).toHaveBeenCalled();
  });
});
