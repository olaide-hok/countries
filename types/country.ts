export interface Country {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    subregion: string;
    region: string;
    population: number;
    latlng: [number, number]; // Tuple for latitude/longitude
    demonym: string;
    area: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    flags: {
        svg: string;
        png: string;
    };
    currencies: Currency[];
    languages: Language[];
    translations: {
        [key: string]: string; // Dynamic translation keys
        br: string;
        pt: string;
        nl: string;
        hr: string;
        fa: string;
        de: string;
        es: string;
        fr: string;
        ja: string;
        it: string;
        hu: string;
    };
    flag: string;
    regionalBlocs: RegionalBloc[];
    cioc: string;
    independent: boolean;
}

interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

interface RegionalBloc {
    acronym: string;
    name: string;
}

// For the array of countries
export type Countries = Country[];

export interface CountriesFilter {
    name: string;
    region: string;
}

export interface CountryAPI {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    flags: {
        svg: string;
        png: string;
        alt: string;
    };
    capital: string[];
    region: string;
    population: number;
}

export type CountriesAPI = CountryAPI[];

export interface CountryData {
    name: {nativeName: {[key: string]: {common: string}}; common: string};
    population: number;
    region: string;
    subregion: string;
    capital: string;
    flags: {svg: string; png: string; alt: string};
    tld: string[];
    borders: string[];
    currencies: {[key: string]: {name: string}};
    languages: {[key: string]: string};
}
