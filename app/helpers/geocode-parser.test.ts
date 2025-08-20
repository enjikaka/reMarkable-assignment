import { expect, suite, test } from 'vitest'
import { parseTown } from './geocode-parser';

const osloAdress = {
    "tourism": "Tigeren",
    "road": "Jernbanetorget",
    "quarter": "Vaterland",
    "suburb": "Sentrum",
    "municipality": "Oslo",
    "city": "Oslo",
    "ISO3166-2-lvl4": "NO-03",
    "postcode": "0154",
    "country": "Norge",
    "country_code": "no"
};

const mariehamnAdress = {
    "road": "Storagatan",
    "suburb": "Kvarnberg",
    "city_district": "Kvarnberg",
    "town": "Mariehamn",
    "municipality": "Mariehamns stad",
    "county": "Åland",
    "ISO3166-2-lvl3": "FI-01",
    "state": "Landskapet Åland",
    "ISO3166-2-lvl4": "FI-01",
    "postcode": "22100",
    "country": "Finland",
    "country_code": "fi"
};

const lindoAdress = { "suburb": "Lindö", "village": "Lindö", "municipality": "Norrköpings kommun", "county": "Östergötlands län", "ISO3166-2-lvl4": "SE-E", "postcode": "603 75", "country": "Sverige", "country_code": "se" };

suite('parseTown', () => {
    test('Returns city when geojson adress contains city', () => {
        const result = parseTown(osloAdress);

        expect(result).toBe('Oslo');
    });

    test('Returns town when geojson adress contains town', () => {
        const result = parseTown(mariehamnAdress);

        expect(result).toBe('Mariehamn');
    });

    test('Returns village when geojson adress contains village', () => {
        const result = parseTown(lindoAdress);

        expect(result).toBe('Lindö');
    });
})