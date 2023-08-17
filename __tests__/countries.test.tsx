import { expect, test, describe, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Countries from "@/pages/countries";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("Countries", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <Countries />
      </QueryClientProvider>
    );
  });

  test("Check if filters exist", () => {
    const filter = document.querySelector("#filter-content");

    expect(filter).toBeTruthy();
  });

  test("Validate list of countries", async () => {
    const list = document.querySelector("#list-countries");

    expect(list).toBeTruthy();
  });
});
