import type { Position } from "~/types";

export type Latitude = number;
export type Longitude = number;

async function promisedGeolocation(): Promise<[Latitude, Longitude]> {
    const lastLocation = localStorage.getItem("last-location");

    if (lastLocation) {
        const [lat, lon] = lastLocation.split(",").map(n => parseFloat(n));
        return [lat, lon];
    }

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const coords = [position.coords.latitude, position.coords.longitude];

            const [lat, lon] = coords.map((coord) => coord.toFixed(4)).map(n => parseFloat(n));

            localStorage.setItem("last-location", [lat, lon].join(","));

            resolve([lat, lon]);
        }, (error) => {
            reject(error);
        });
    });
}

/**
 * Get coordinates for known locations. Limited to 4 decimals due to rate limiting in reverse geocoding APIs.
 */
export async function getLocation(name: Position): Promise<[Latitude, Longitude]> {
    switch (name) {
        case "here":
            return promisedGeolocation();
        case "oslo":
            return [59.9111, 10.7503];
        case "stockholm":
            return [59.3268, 18.0718];
        case "helsingfors":
            return [60.1695, 24.9391];
        case 'copenhagen':
            return [55.6761, 12.5683];
    }

    throw new Error(`Unknown location: ${name}`);
}