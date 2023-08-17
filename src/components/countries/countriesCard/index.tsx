import { memo } from "react";
import Image from "next/image";
import { IName } from "@/types/countriesType";
import Link from "next/link";
const CountriesCard = ({
  image,
  name,
  population,
  region,
  capital,
  route,
}: {
  image: string;
  name: IName;
  population: number;
  region: string;
  capital: string | string[];
  route: string;
}) => {
  return (
    <Link href={route}>
      <div className="card ms-5 sm:w-80 md:w-9/12 lg:w-9/12 xl:w-9/12 bg-base-100 shadow-xl mb-10">
        <figure>
          <Image
            src={image}
            alt={`${name} flag`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "150px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name.common}</h2>
          <p>
            Population : <span>{population}</span>
          </p>
          <p>
            Region : <span>{region}</span>
          </p>
          <p>
            Capital : <span>{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default memo(CountriesCard);
