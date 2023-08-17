import { ICountriesRootObject } from "@/types/countriesType";
import { useQuery } from "@tanstack/react-query";

export const useGetCountries = (url: string) =>
  useQuery<ICountriesRootObject[]>({
    queryKey: ["ICountriesRootObject", url],
    queryFn: () => fetch(url).then((res) => res.json()),
    enabled: !!url,
  });
