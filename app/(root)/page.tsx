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
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-y-(--space-500) md:gap-(--space-900) md:px-[2.75rem]">
                {filteredCountries.map((country) => (
                    <CountryCard key={country.name} country={country} />
                ))}
            </div>
        </main>
    );
}
