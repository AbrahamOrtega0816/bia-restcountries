import { test, assert, describe, beforeEach } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import SwitchTheme from "@/components/navbar/components/SwitchTheme";

describe("SwitchTheme", () => {
  beforeEach(() => {
    render(<SwitchTheme />);
  });

  test("SwitchTheme toggles theme on button click", async () => {
    const switchThemeComponent = screen.getByTestId("switch-theme");
    const toggleButton = screen.getByTestId("btn-toggle-theme");
    const spanTheme = screen.getByTestId("span-theme");

    // Initial state
    assert.exists(switchThemeComponent);
    assert.exists(toggleButton);

    assert.equal(spanTheme.textContent, "Dark Mode");

    // Simulate button click
    await fireEvent.click(toggleButton);

    // Check if theme state changed
    assert.equal(spanTheme.textContent, "Light Mode");

    // Simulate button click again
    await fireEvent.click(toggleButton);

    // Check if theme state changed back
    assert.equal(spanTheme.textContent, "Dark Mode");
  });
});
