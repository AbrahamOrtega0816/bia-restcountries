import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import Navbar from "@/components/navbar/index.jsx";

describe("Navbar", () => {
  test("Navbar renders title correctly", () => {
    const { getByText } = render(<Navbar />);
    const titleElement = getByText("Where in the world ?");
    expect(titleElement).toBeDefined();
  });

  test("Navbar contains SwitchTheme component", () => {
    const switchThemeComponent = screen.getByTestId("switch-theme");
    expect(switchThemeComponent).toBeDefined();
  });
});
