import { test, describe, beforeEach, assert, vi } from "vitest";
import CountriesDetail from "@/pages/countries/detail/[id]";
import { fireEvent, render, screen } from "@testing-library/react";
import { createMockRouter } from "@/utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as countriesService from "@/services/countriesService";
import React from "react";

const queryClient = new QueryClient();

const mockCountryData = {
  name: { common: "Example Country" },
  population: 1234567,
  region: "Example Region",
  subregion: "Example Subregion",
  capital: "Example Capital",
  flags: {
    svg: "https://www.aerocivil.gov.co/Style%20Library/CEA/img/img.jpg",
  },
  currencies: [{ name: "Example Currency" }],
  languages: [{ name: "English" }],
  borders: ["Border Country 1", "Border Country 2"],
};

describe("CountriesDetail", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <RouterContext.Provider
          value={createMockRouter({ query: { id: "Colombia" } })}
        >
          <CountriesDetail />
        </RouterContext.Provider>
      </QueryClientProvider>
    );
  });

  test("Renders loading spinner when data is loading", async () => {
    vi.spyOn(countriesService, "useGetCountries").mockReturnValue({
      data: [],
      isLoading: true,
    });

    assert.exists(screen.getByTestId("loading-spiner"));
  });

  test('Navigates back to the countries when "Back"  is clicked', async () => {
    const linkBack = document.querySelector("#action-back");

    assert.exists(linkBack);

    fireEvent.click(linkBack as Element);

    assert.include(location.href, "/");
  });
});
