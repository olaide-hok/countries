import {Search} from 'lucide-react';
import {Input} from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import {useCountries} from '@/context/CountryContext';

const SearchFilter = () => {
    const {filteredCountries, setFilters} = useCountries();

    const handleSearchChange = (value: string) => {
        setFilters({name: value});
    };

    const handleRegionChange = (value: string) => {
        setFilters({region: value});
    };

    return (
        <div className="flex flex-col px-(--space-200) md:px-(--space-500)  lg:px-(--space-800) gap-y-(--space-500)  md:flex-row md:justify-center lg:justify-between">
            {/* Search Bar */}
            <div className="input-wrapper bg-(--primary) relative max-w-[30rem] md:w-[30rem] pl-(--space-400) h-(--space-700) overflow-hidden">
                <Search className="absolute left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 text-(--secondary-foreground)" />
                <Input
                    placeholder="Search for a country..."
                    className="border-none shadow-none rounded-none text-(length:--fs-14) pl-(--space-600) text-base h-full w-full outline-none focus-visible:ring-0 leading-(--lh-145)"
                    value={filteredCountries.name || ''}
                    onChange={(e) => handleSearchChange(e.target.value)}
                />
            </div>

            {/* Filter Dropdown */}
            <Select
                value={filteredCountries.region || ''}
                onValueChange={handleRegionChange}>
                <SelectTrigger className="dropdown-trigger bg-(--primary) rounded-[0.3125rem] text-(length:--fs-14) w-[12.5rem] h-(--space-700) flex items-center justify-between px-(--space-300) cursor-pointer outline-none">
                    <SelectValue placeholder="Filter by region" />
                </SelectTrigger>
                <SelectContent className="bg-(--primary) w-[12.5rem] px-(--space-300)">
                    <SelectItem value="all">Filter by Region</SelectItem>
                    <SelectItem value="Africa">Africa</SelectItem>
                    <SelectItem value="America">America</SelectItem>
                    <SelectItem value="Asia">Asia</SelectItem>
                    <SelectItem value="Europe">Europe</SelectItem>
                    <SelectItem value="Oceania">Oceania</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default SearchFilter;
