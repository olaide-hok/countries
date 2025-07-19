/* eslint-disable @next/next/no-img-element */
'use client';

import BackBtn from '@/components/BackBtn';
import {useCountries} from '@/context/CountryContext';
import {formatNumber} from '@/lib/utils';

import useSWR from 'swr';

const url = `https://restcountries.com/v3.1/name/`;
const fetcher = (url: string) => fetch(url).then((res) => res.json());
function useCountry(name: string) {
    const {data, error, isLoading} = useSWR(`${url}${name}`, fetcher);

    return {
        countryData: data,
        isLoading,
        isError: error,
    };
}
interface CountryDetailsAPIProps {
    name: string;
}

const CountryDetailsAPI = ({name: countryName}: CountryDetailsAPIProps) => {
    const {countryData, isLoading, isError} = useCountry(countryName);

    if (isError) return 'An error has occurred.';
    if (isLoading) return 'Loading...';

    if (!countryData) {
        return <div>Country not found</div>;
    }

    const {
        name,
        population,
        region,
        subregion,
        capital,
        flags,
        tld,
        borders,
        currencies,
        languages,
    } = countryData[0];

    return (
        <div className="container flex flex-col gap-y-(--space-800) md:gap-y-(--space-700) lg:gap-y-(--space-1000) mt-(--space-300) md:mt-(--space-500) lg:mt-(--space-1000) mb-[3.4375rem] md:mb-(--space-800) px-[1.0938rem] mx-auto md:px-[6.1875rem] lg:px-(--space-800) ">
            {/* Back button */}
            <BackBtn />

            {/* Details */}
            <div className="flex flex-col gap-y-(--space-600) lg:gap-x-[7rem] lg:flex-row lg:items-center">
                {/* Flag */}
                <img
                    className="img-details rounded-[0.5rem] overflow-hidden w-[19.9898rem] h-[14.245rem] md:w-[35.5929rem] md:h-[27.2252rem] lg:w-[34.9822rem] lg:h-[25.0625rem]"
                    src={flags?.png}
                    alt={flags?.alt}
                />

                {/* Details */}
                <div>
                    {/* Name */}
                    <h3 className="text-(length:--fs-24) md:text-(length:--fs-32) lg font-extrabold leading-(--lh-1375) mb-(--space-200)">
                        {name?.common}
                    </h3>

                    {/* Other details */}
                    <div className="flex flex-col gap-y-(--space-400) md:gap-y-(--space-300) lg:gap-y-(--space-800)">
                        <div className="flex flex-col gap-y-(--space-400) md:gap-y-(--space-300) md:flex-row justify-between">
                            <div className="flex flex-col gap-y-(--space-200)">
                                {/* Native Name */}
                                <p className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                    Native Name:{' '}
                                    <span className="font-light">
                                        {name.nativeName.slv.common}
                                    </span>
                                </p>
                                {/* Population */}
                                <p className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                    Population:{' '}
                                    <span className="font-light">
                                        {formatNumber(population)}
                                    </span>
                                </p>
                                {/* Region */}
                                <p className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                    Region:{' '}
                                    <span className="font-light">{region}</span>
                                </p>
                                {/* Sub Region */}
                                <p className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                    Sub Region:{' '}
                                    <span className="font-light">
                                        {subregion}
                                    </span>
                                </p>
                                {/* Capital */}
                                <p className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                    Capital:{' '}
                                    <span className="font-light">
                                        {capital[0]}
                                    </span>
                                </p>
                            </div>

                            {/* Top Level Domain, Currencies, and Languages */}
                            <div className="flex flex-col gap-y-(--space-200)">
                                {/* Top Level Domain */}
                                <p className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                    Top Level Domain:{' '}
                                    <span className="font-light">{tld[0]}</span>
                                </p>
                                {/* Currencies */}
                                <p className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                    Currencies:{' '}
                                    {currencies && (
                                        <span className="font-light">
                                            {currencies.EUR.name}
                                        </span>
                                    )}
                                </p>
                                {/*Languages*/}
                                <p className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                    Languages:{' '}
                                    <span className="font-light">
                                        {languages.slv}
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Border Countries */}
                        <div className="flex flex-col gap-y-(--space-200) md:items-center  md:flex-row md:gap-x-(--space-200)">
                            {borders && (
                                <>
                                    <h4 className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                        Border Countries:
                                    </h4>

                                    <div className="flex flex-wrap gap-(--space-100) md:gap-x-(--space-200)">
                                        {borders.map((border: string) => (
                                            <span
                                                className="border-tile bg-(--primary) rounded-[0.25rem] text-(length:--fs-12) text-center py-(--space-100) font-light leading-(--lh-135)  h-[1.75rem] w-[5rem]"
                                                key={border}>
                                                {border}
                                            </span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetailsAPI;
