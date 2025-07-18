import {formatNumber} from '@/lib/utils';
import {Country} from '@/types/country';
import Image from 'next/image';
import Link from 'next/link';

interface CountryCardProps {
    country: Country;
}

const CountryCard = ({country}: CountryCardProps) => {
    const {name, population, region, capital, flags} = country;

    return (
        <Link
            href={`/country/${name}`}
            className="country-card bg-(--primary) flex flex-col rounded-[0.3125rem] w-[16.5rem] h-[21rem] overflow-hidden">
            {/* Flag */}
            <div className="flag flex-1">
                <Image
                    src={flags.svg}
                    alt={`${name} flag`}
                    width={267}
                    height={160}
                />
            </div>

            {/* Details */}
            <div className="details flex flex-col flex-1 gap-y-(--space-200) pl-[1.62rem] pt-[1.37rem]">
                {/* Name */}
                <h2 className="text-(length:--fs-18) font-extrabold leading-(--lh-145)">
                    {name}
                </h2>

                <div className="flex flex-col gap-y-(--space-100)">
                    {/* Population */}
                    <p className="text-(length:--fs-14) font-semibold leading-[1rem]">
                        Population:{' '}
                        <span className="font-light">
                            {formatNumber(population)}
                        </span>
                    </p>
                    {/* Region */}
                    <p className="text-(length:--fs-14) font-semibold leading-[1rem]">
                        Region: <span className="font-light">{region}</span>
                    </p>
                    {/* Capital */}
                    <p className="text-(length:--fs-14) font-semibold leading-[1rem]">
                        Capital: <span className="font-light">{capital}</span>
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CountryCard;
