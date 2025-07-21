'use client';

import CountryCard from '@/components/CountryCard';
import SearchFilter from '@/components/SearchFilter';
import {useCountries} from '@/context/CountryContext';

export default function Home() {
    const {getFilteredCountries} = useCountries();
    const filteredCountries = getFilteredCountries();

    return (
        <main className="container flex flex-col mt-(--space-300) md:mt-(--space-600) gap-y-(--space-400) md:gap-y-(--space-600) mx-auto">
            <SearchFilter />
            {filteredCountries.length > 0 ? (
                <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-y-(--space-500) md:gap-(--space-900) md:px-[2.75rem]">
                    {filteredCountries.map((country) => (
                        <CountryCard key={country.name} country={country} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <div>
                        {/* < className="w-12 h-12 mx-auto text-muted-foreground mb-4" /> */}
                        <h2 className="text-lg font-semibold mb-2">
                            No country found, please provide a valid country
                            name.
                        </h2>
                        <p className="text-muted-foreground">
                            Try adjusting your search criteria or clearing the
                            region filter.
                        </p>
                    </div>
                </div>
            )}
        </main>
    );
}
