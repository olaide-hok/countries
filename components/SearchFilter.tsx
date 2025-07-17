import {ChevronDown, Search} from 'lucide-react';
import {Input} from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {useCountries} from '@/context/CountryContext';

const SearchFilter = () => {
    const {setFilters} = useCountries();

    const handleSearchChange = (value: string) => {
        setFilters({name: value});
    };

    const handleRegionChange = (value: string) => {
        setFilters({region: value});
    };

    return (
        <div className="flex flex-col  gap-y-(--space-500)  md:flex-row md:justify-center lg:justify-between">
            {/* Search Bar */}
            <div className="input-wrapper bg-(--primary) relative max-w-[30rem] md:w-[30rem] pl-(--space-400) h-(--space-700) overflow-hidden">
                <Search className="absolute left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 text-(--secondary-foreground)" />
                <Input
                    placeholder="Search for a country..."
                    className="border-none shadow-none rounded-none text-(length:--fs-14) pl-(--space-600) text-base h-full w-full outline-none focus-visible:ring-0 leading-(--lh-145)"
                    onChange={(e) => handleSearchChange(e.target.value)}
                />
            </div>

            {/* Filter Dropdown */}

            <DropdownMenu>
                <DropdownMenuTrigger className="dropdown-trigger bg-(--primary) rounded-[0.3125rem] text-(length:--fs-14) w-[12.5rem] h-(--space-700) flex items-center justify-between px-(--space-300) cursor-pointer outline-none">
                    Filter by Region
                    <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-(--primary) w-[12.5rem] px-(--space-300)">
                    <DropdownMenuItem
                        onClick={() => handleRegionChange('Africa')}>
                        Africa
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => handleRegionChange('America')}>
                        America
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => handleRegionChange('Asia')}>
                        Asia
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => handleRegionChange('Europe')}>
                        Europe
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => handleRegionChange('Oceania')}>
                        Oceania
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default SearchFilter;
