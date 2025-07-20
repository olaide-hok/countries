import {Metadata} from 'next';
import CountryDetailsAPI from './country-details-api';
import {countryDetailsEndpoint, fetcher} from '@/lib/utils';

type Props = {
    params: Promise<{name: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
    // read route params
    const {name} = await params;
    const nameToUse = decodeURIComponent(name);

    // fetch country data
    const data = await fetcher(`${countryDetailsEndpoint}${nameToUse}`);

    if (!data[0]) {
        return {
            title: 'Country Details not found',
        };
    }

    return {
        title: `${data[0].name.common}`,
    };
}

const CountryDetailsPage = async ({params}: Props) => {
    const {name} = await params;
    const nameToUse = decodeURIComponent(name);

    return <CountryDetailsAPI name={nameToUse} />;
};

export default CountryDetailsPage;
