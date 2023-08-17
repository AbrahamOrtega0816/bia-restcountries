import { expect, test, describe, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import SwitchTheme from "@/components/navbar/components/SwitchTheme";

describe("switchTheme", () => {
  beforeEach(() => {
    render(<SwitchTheme />);
  });

  test("Check if btn exist", () => {
    const filter = document.querySelector("#btn-toggle-theme");

    expect(filter).toBeTruthy();
  });
});
