import countriesData from '@/data/data.json';
import {Metadata} from 'next';
import CountryDetails from './country-details';

type Props = {
    params: Promise<{name: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
    // read route params
    const {name} = await params;

    // fetch country data
    const countryData = countriesData.find((c) => c.name === name);

    if (!countryData) {
        return {
            title: 'Country Details not found',
        };
    }

    return {
        title: `${countryData.name}`,
    };
}

const CountryDetailsPage = async ({params}: Props) => {
    const {name} = await params;

    return <CountryDetails name={name} />;
};

export default CountryDetailsPage;
