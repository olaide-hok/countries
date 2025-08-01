/* eslint-disable @next/next/no-img-element */
'use client';

import BackBtn from '@/components/BackBtn';
import {useCountries} from '@/context/CountryContext';
import {formatNumber} from '@/lib/utils';

interface CountryDetailsProps {
    name: string;
}

const CountryDetails = ({name: countryName}: CountryDetailsProps) => {
    const {getCountryByName} = useCountries();
    const countryData = getCountryByName(countryName);

    if (!countryData) {
        return <div>Country not found</div>;
    }

    const {
        name,
        population,
        region,
        capital,
        nativeName,
        flag,
        topLevelDomain,
        borders,
        currencies,
        languages,
    } = countryData;

    return (
        <div className="container flex flex-col gap-y-(--space-800) md:gap-y-(--space-700) lg:gap-y-(--space-1000) mt-(--space-300) md:mt-(--space-500) lg:mt-(--space-1000) mb-[3.4375rem] md:mb-(--space-800) px-[1.0938rem] mx-auto md:px-[6.1875rem] lg:px-(--space-800) ">
            {/* Back button */}
            <BackBtn />

            {/* Details */}
            <div className="flex flex-col gap-y-(--space-600) lg:gap-x-[7rem] lg:flex-row lg:items-center">
                {/* Flag */}
                <img
                    className="img-details flex-1 rounded-[0.5rem] overflow-hidden w-[19.9898rem] h-[14.245rem] md:w-[35.5929rem] md:h-[27.2252rem] lg:w-[34.9822rem] lg:h-[25.0625rem]"
                    src={flag}
                    alt={`${name} flag`}
                />

                {/* Details */}
                <div className="flex-1">
                    {/* Name */}
                    <h3 className="text-(length:--fs-24) md:text-(length:--fs-32) lg font-extrabold leading-(--lh-1375) mb-(--space-200)">
                        {name}
                    </h3>

                    {/* Other details */}
                    <div className="flex flex-col gap-y-(--space-400) md:gap-y-(--space-300) lg:gap-y-(--space-800)">
                        <div className="flex flex-col gap-y-(--space-400) md:gap-y-(--space-300) md:flex-row justify-between">
                            <div className="flex flex-col gap-y-(--space-200)">
                                {/* Native Name */}
                                <p className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                    Native Name:{' '}
                                    <span className="font-light">
                                        {nativeName}
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
                                    <span className="font-light">{region}</span>
                                </p>
                                {/* Capital */}
                                <p className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                    Capital:{' '}
                                    <span className="font-light">
                                        {capital}
                                    </span>
                                </p>
                            </div>

                            {/* Top Level Domain, Currencies, and Languages */}
                            <div className="flex flex-col gap-y-(--space-200)">
                                {/* Top Level Domain */}
                                <p className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                    Top Level Domain:{' '}
                                    <span className="font-light">
                                        {topLevelDomain}
                                    </span>
                                </p>
                                {/* Currencies */}
                                <p className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                    Currencies:{' '}
                                    {currencies.map((currency, index) => (
                                        <span
                                            key={currency.name}
                                            className="font-light">
                                            {currency.name +
                                                (index < currencies.length - 1
                                                    ? ', '
                                                    : '')}
                                        </span>
                                    ))}
                                </p>
                                {/*Languages*/}
                                <p className="text-(length:--fs-14) md:text-(length:--fs-16) font-semibold leading-[1rem]">
                                    Languages:{' '}
                                    {languages.map((lang, index) => (
                                        <span
                                            key={lang.name}
                                            className="font-light">
                                            {lang.name +
                                                (index < languages.length - 1
                                                    ? ', '
                                                    : '')}
                                        </span>
                                    ))}
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
                                        {borders.map((border) => (
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

export default CountryDetails;
