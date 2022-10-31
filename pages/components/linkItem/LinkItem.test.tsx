import { render, screen } from "@testing-library/react";
import LinkItem from "./LinkItem";

const props = {
  icon: "ICON",
  title: "TITLE",
  path: "PATH",
  active: false,
};

const getRenderer = () => render(<LinkItem {...props} />);

describe("<LinkItem />", () => {
  it("Should render the title properly", () => {
    getRenderer();
    const titleElement = screen.getByText(props.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("Should render the icon properly", () => {
    getRenderer();
    const iconElement = screen.getByTestId("link-item-icon");
    expect(iconElement).toBeInTheDocument();
  });
});
