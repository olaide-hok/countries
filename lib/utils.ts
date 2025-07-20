import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
import useSWR from 'swr';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Format numbers with commas
export const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US', {
        maximumFractionDigits: 2,
    });
};

const url = `https://restcountries.com/v3.1/name/`;
export const fetcher = (url: string) => fetch(url).then((res) => res.json());

/**
 * This is a custom React hook named `useGetCountry` that fetches country data from the [REST Countries API](https://restcountries.com/) using the `useSWR` hook.
 * It takes a `name` parameter, appends it to the API URL, and returns an object with the fetched data, a loading state, and an error state.
 * @param name
 * @returns {
 *   countryData: any,
 *   isLoading: boolean,
 *   isError: any
 * }
 */
export function useGetCountry(name: string) {
    const {data, error, isLoading} = useSWR(`${url}${name}`, fetcher);

    return {
        countryData: data,
        isLoading,
        isError: error,
    };
}

export interface Country {
    name: {
        common: string;
        official: string;
        nativeName?: Record<string, {official: string; common: string}>;
    };
    currencies?: Record<string, {name: string; symbol: string}>;
    languages?: Record<string, string>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any; // for flexibility
}
