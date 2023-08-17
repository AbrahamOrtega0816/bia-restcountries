import CountriesCard from "@/components/countries/countriesCard";
import CountriesFilters from "@/components/countries/countriesFilters";
import { useGetCountries } from "@/services/countriesService";
import { SyntheticEvent, memo, useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

const Countries = () => {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const debouncedSearchTerm = useDebounce(search, 300);

  const [url, setUrl] = useState<string>(
    "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags"
  );

  const searchChange = (e: SyntheticEvent) => {
    setSearch((e.target as HTMLTextAreaElement).value);
  };

  const selectRegion = (e: SyntheticEvent) => {
    setRegion((e.target as HTMLTextAreaElement).value);
  };

  const { data, isLoading } = useGetCountries(url);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setUrl(
        `https://restcountries.com/v3.1/name/${debouncedSearchTerm}?fields=name,capital,region,population,flags`
      );
    } else if (region) {
      setUrl(
        `https://restcountries.com/v3.1/region/${region}?fields=name,capital,region,population,flags`
      );
    } else {
      setUrl(
        "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags"
      );
    }
  }, [debouncedSearchTerm, region]);

  return (
    <div>
      <CountriesFilters
        searchChange={searchChange}
        selectRegion={selectRegion}
      />
      <div
        id="list-countries"
        className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center"
      >
        {data?.length &&
          !isLoading &&
          data.map((country) => {
            const { name, population, region, capital } = country;
            return (
              <CountriesCard
                key={name?.common}
                image={country?.flags?.svg}
                name={name}
                population={population}
                region={region}
                capital={capital as string[]}
                route={`/countries/detail/${name?.common}`}
              />
            );
          })}
      </div>
      {isLoading && (
        <div className="flex justify-center w-full mt-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default memo(Countries);
