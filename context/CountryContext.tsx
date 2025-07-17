'use client';

import countriesData from '@/data/data.json';
import {Countries, CountriesFilter, Country} from '@/types/country';
import {createContext, useContext, useState} from 'react';

interface CountryContextType {
    countries: Countries;
    filteredCountries: CountriesFilter;
    setFilters: (filters: Partial<CountriesFilter>) => void;
    getFilteredCountries: () => Countries;
    getCountryByName: (name: string) => Country | undefined;
}

export const CountryContext = createContext<CountryContextType>({
    countries: [],
    filteredCountries: {
        name: '',
        region: '',
    },
    setFilters: () => {},
    getFilteredCountries: () => [],
    getCountryByName: () => undefined,
});

export const CountryProvider = ({children}: {children: React.ReactNode}) => {
    const [countries, setCountries] = useState<Countries>(
        countriesData as Countries
    );

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

    const getFilteredCountries = () => {
        return countries.filter((country) => {
            const searchName = filteredCountries.name.toLowerCase();
            // for search input
            const matchesSearch =
                !searchName ||
                country.name.toLowerCase().includes(searchName) ||
                country.nativeName.toLowerCase().includes(searchName);

            // for region
            const matchesRegion =
                !filteredCountries.region ||
                country.region
                    .toLowerCase()
                    .includes(filteredCountries.region.toLowerCase());

            return matchesSearch && matchesRegion;
        });
    };

    // get country by name
    const getCountryByName = (name: string) => {
        return countries.find(
            (country) => country.name.toLowerCase() === name.toLowerCase()
        );
    };

    return (
        <CountryContext.Provider
            value={{
                countries,
                filteredCountries,
                setFilters,
                getFilteredCountries,
                getCountryByName,
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
