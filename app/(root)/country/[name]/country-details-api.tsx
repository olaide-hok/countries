/* eslint-disable @next/next/no-img-element */
'use client';

import BackBtn from '@/components/BackBtn';
import {formatNumber, useGetCountry} from '@/lib/utils';
import {CountryData} from '@/types/country';
import {AlertTriangle, Globe, Loader2} from 'lucide-react';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';

interface CountryDetailsAPIProps {
    name: string;
}

const CountryDetailsAPI = ({name: countryName}: CountryDetailsAPIProps) => {
    const {countryData, isLoading, isError} = useGetCountry(countryName);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-12">
                <Loader2 className="animate-spin h-6 w-6 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Loading...</span>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center py-8">
                <Alert variant="destructive" className="w-fit">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        An error has occurred. Please try again.
                    </AlertDescription>
                </Alert>
            </div>
        );
    }

    if (countryData.message === 'Not Found') {
        return (
            <div className="flex justify-center items-center h-64">
                <Alert variant="destructive" className="max-w-md text-center">
                    <Globe className="h-[1rem] w-[1rem" />
                    <AlertTitle>Country Not Found</AlertTitle>
                    <AlertDescription>
                        We couldn&apos;t find the country you&apos;re looking
                        for. Please check the name and try again.
                    </AlertDescription>
                </Alert>
            </div>
        );
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
    } = countryData[0] as CountryData;

    // Native name (common) — get first entry if available
    const nativeNameCommon =
        name?.nativeName && Object.values(name.nativeName)[0]?.common;

    // Currency name — get first entry if available
    const currencyName = currencies && Object.values(currencies)[0]?.name;

    // Languages — get all names in array form
    const languageNames = languages ? Object.values(languages).join(', ') : '';

    return (
        <div className="container flex flex-col gap-y-(--space-800) md:gap-y-(--space-700) lg:gap-y-(--space-1000) mt-(--space-300) md:mt-(--space-500) lg:mt-(--space-1000) mb-[3.4375rem] md:mb-(--space-800) px-[1.0938rem] mx-auto md:px-[6.1875rem] lg:px-(--space-800) ">
            {/* Back button */}
            <BackBtn />

            {/* Details */}
            <div className="flex flex-col gap-y-(--space-600) lg:gap-x-[7rem] lg:flex-row lg:items-center">
                {/* Flag */}
                <img
                    className="img-details flex-1 rounded-[0.5rem] overflow-hidden w-[19.9898rem] h-[14.245rem] md:w-[35.5929rem] md:h-[27.2252rem] lg:w-[34.9822rem] lg:h-[25.0625rem]"
                    src={flags?.png}
                    alt={flags?.alt}
                />

                {/* Details */}
                <div className="flex-1">
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
                                        {nativeNameCommon}
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
                                            {currencyName}
                                        </span>
                                    )}
                                </p>
                                {/*Languages*/}
                                <p className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                    Languages:{' '}
                                    <span className="font-light">
                                        {languageNames}
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
