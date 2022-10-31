import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

const getRenderer = () => render(<Sidebar />);

describe("<Sidebar />", () => {
  it("Should render the header properly", () => {
    getRenderer();
    const headerElement = screen.getByTestId("sidebar-header");
    expect(headerElement).toBeInTheDocument();
  });

  it("Should render the sidebar main link item properly", () => {
    const mainLinks = [
      "Dashboard",
      "Sensor Health Summary",
      "Enterprise Health Summary",
      "Equipment List",
    ];
    getRenderer();

    mainLinks.forEach((mainLinks) => {
      const linkElement = screen.getByText(mainLinks);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it("Should render the sidebar documents link item properly", () => {
    const documentLinks = ["Notes", "Manual", "Equipments Reports"];
    getRenderer();

    documentLinks.forEach((documentLink) => {
      const linkElement = screen.getByText(documentLink);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
