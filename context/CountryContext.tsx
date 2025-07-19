'use client';

import {CountriesAPI, CountriesFilter} from '@/types/country';
import {createContext, useContext, useEffect, useState} from 'react';
import useSWR from 'swr';

const url =
    'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface CountryContextType {
    countries: CountriesAPI | null;
    isLoading: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any;
    filteredCountries: CountriesFilter;
    setFilters: (filters: Partial<CountriesFilter>) => void;
    getFilteredCountries: () => CountriesAPI;
    // getCountryByName: (name: string) => Country | undefined;
}

export const CountryContext = createContext<CountryContextType>({
    countries: [],
    isLoading: false,
    error: null,
    filteredCountries: {
        name: '',
        region: '',
    },
    setFilters: () => {},
    getFilteredCountries: () => [],
    // getCountryByName: () => undefined,
});

export const CountryProvider = ({children}: {children: React.ReactNode}) => {
    const {data, error, isLoading} = useSWR(url, fetcher);

    const [countries, setCountries] = useState<CountriesAPI | null>(null);

    // filter countries by region
    const [filteredCountries, setFilteredCountries] = useState<CountriesFilter>(
        {
            name: '',
            region: '',
        }
    );

    //
    const setFilters = (filters: Partial<CountriesFilter>) => {
        setFilteredCountries((prevFilters) => ({
            ...prevFilters,
            ...filters,
        }));
    };

    const getFilteredCountries = (): CountriesAPI => {
        const result = countries?.filter((country) => {
            if (filteredCountries?.region === 'all') {
                return country;
            }
            return (
                country.name.common
                    .toLowerCase()
                    .includes(filteredCountries?.name.toLowerCase()) &&
                country.region
                    .toLowerCase()
                    .includes(filteredCountries?.region.toLowerCase())
            );
        });
        return result as CountriesAPI;
    };
    // get country by name
    // const getCountryByName = (name: string) => {
    //     return countries.find(
    //         (country) => country.name.toLowerCase() === name.toLowerCase()
    //     );
    // };

    useEffect(() => {
        if (data) {
            setCountries(data as CountriesAPI);
        }
    }, [data]);

    return (
        <CountryContext.Provider
            value={{
                countries,
                error,
                isLoading,
                filteredCountries,
                setFilters,
                getFilteredCountries,
                // getCountryByName,
            }}>
            {children}
        </CountryContext.Provider>
    );
};

export const useCountries = () => {
    const context = useContext(CountryContext);
    if (!context) {
        throw new Error('useCountries must be used within a CountryProvider');
    }
    return context;
};
