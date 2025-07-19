'use client';

import CountryCardAPI from '@/components/CountryCardAPI';
import SearchFilter from '@/components/SearchFilter';
import {useCountries} from '@/context/CountryContext';
import {CountryAPI} from '@/types/country';

export default function Home() {
    const {getFilteredCountries, isLoading, error} = useCountries();
    const filteredCountries = getFilteredCountries();

    if (error) return 'An error has occurred.';
    if (isLoading) return 'Loading...';
    if (!filteredCountries) return <div>No countries found!</div>;

    return (
        <main className="container flex flex-col mt-(--space-300) md:mt-(--space-600) gap-y-(--space-400) md:gap-y-(--space-600) mx-auto">
            <SearchFilter />
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-y-(--space-500) md:gap-(--space-900) md:px-[2.75rem]">
                {filteredCountries.length > 0 ? (
                    <>
                        {filteredCountries.map((country: CountryAPI) => (
                            <CountryCardAPI
                                key={country.name.common}
                                country={country}
                            />
                        ))}
                    </>
                ) : (
                    <div className="text-center py-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">
                                No countries found
                            </h3>
                            <p className="text-xl">
                                Try adjusting your search criteria.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
