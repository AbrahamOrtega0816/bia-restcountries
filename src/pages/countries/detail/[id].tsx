import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useGetCountries } from "@/services/countriesService";
import {
  ICountriesRootObject,
  ICurrenciesItem,
  ILanguagesItem,
} from "@/types/countriesType";
import { useEffect, useMemo, useState } from "react";

const CountriesDetail = () => {
  const router = useRouter();
  const { id: countryName } = router.query;

  const [url, setUrl] = useState<string>("");
  const [country, setCountry] = useState<ICountriesRootObject>();

  const { data, isLoading, isError } = useGetCountries(url);

  const memoLanguages = useMemo(() => {
    if (!country || isError) return null;

    const languagesValues = country?.languages
      ? Object?.values(country?.languages as ILanguagesItem[])
      : [];

    return (
      <span>
        {languagesValues
          ?.map((language) => {
            return language;
          })
          .join(", ")}
      </span>
    );
  }, [country, isError]);

  const memoCurrencies = useMemo(() => {
    if (!country || isError) return null;

    const currenciesValues = country?.currencies
      ? Object.values(country?.currencies as ICurrenciesItem[])
      : [];

    return (
      <span>
        {currenciesValues
          ?.map((currency) => {
            return currency.name;
          })
          .join(", ")}
      </span>
    );
  }, [country, isError]);

  const memoBorderCountries = useMemo(() => {
    if (!country?.borders || isError) return "No border countries";

    return (
      <span>
        {country?.borders?.map((border) => {
          return (
            <Link
              key={border}
              href={`/countries/detail/${border}`}
              className="mr-3"
            >
              <button className="btn">{border}</button>
            </Link>
          );
        })}
      </span>
    );
  }, [country, isError]);

  useEffect(() => {
    if (countryName)
      setUrl(
        `https://restcountries.com/v3.1/${
          countryName.length <= 3 ? "alpha" : "name"
        }/${countryName}?fields=name,capital,region,population,flags,borders,nativeName,subregion,topLevelDomain,currencies,languages`
      );
  }, [countryName]);

  useEffect(() => {
    setCountry(Array.isArray(data) ? data?.[0] : data);
  }, [data]);

  return (
    <div>
      <div className="flex w-full">
        <Link
          href="/"
          className="detailPageBtn"
          data-testid="action-back"
          id="action-back"
        >
          <div className="flex items-center gap-5">
            <Image
              src={"/images/backward.svg"}
              alt="back"
              className="w-8 h-8 swap-on"
              width={32}
              height={32}
            />
            <Image
              src={"/images/backward-white.svg"}
              alt="back-white"
              className="w-8 h-8 hidden swap-off"
              width={32}
              height={32}
            />
            <h3 className="font-bold text-2xl">Back</h3>
          </div>
        </Link>
      </div>
      {isLoading && (
        <div
          className="flex justify-center w-full mt-10"
          data-testid="loading-spiner"
        >
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      {country && !isLoading && (
        <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-20">
          <div className="mb-10">
            <Image
              src={country?.flags?.svg as string}
              alt="flags"
              className="w-8 h-8 swap-on"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "350px",
              }}
            />
          </div>
          <div className="countryInfo" data-testid="country-innfo">
            <h2 className="font-bold text-3xl">{country?.name.common}</h2>
            <div className="flex gap-20 mt-10">
              <div className="flex flex-col gap-5">
                <p>
                  <span className="font-bold">Native Name </span> :{" "}
                  <span>{country?.name?.official}</span>
                </p>
                <p>
                  <span className="font-bold"> Popultation :</span>{" "}
                  <span>{country?.population}</span>
                </p>
                <p>
                  <span className="font-bold"> Region :</span>{" "}
                  <span>{country?.region}</span>
                </p>
                <p>
                  <span className="font-bold"> Sub Region :</span>{" "}
                  <span>{country?.subregion}</span>
                </p>
                <p>
                  <span className="font-bold"> Capital :</span>{" "}
                  <span>{country?.capital}</span>
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {/* topLevelDomain this property is not returned in the api */}
                <p>
                  <span className="font-bold"> Top Level Domain :</span>{" "}
                  <span>{country?.topLevelDomain?.[0]}</span>
                </p>

                <p>
                  <span className="font-bold"> Currencies : </span>{" "}
                  {memoCurrencies}
                </p>
                <p>
                  <span className="font-bold">Languages :</span>{" "}
                  <span>{memoLanguages}</span>
                </p>
              </div>
            </div>

            <div className="mt-10">
              <span className="font-bold">Border Countries: </span>
              <div className="mt-5">{memoBorderCountries}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountriesDetail;
