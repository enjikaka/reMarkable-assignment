type Latitude = number;
type Longitude = number;

async function promisedGeolocation(): Promise<[Latitude, Longitude]> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const coords = [position.coords.latitude, position.coords.longitude];

            const [lat, lon] = coords.map((coord) => coord.toFixed(4)).map(n => parseFloat(n));

            resolve([lat, lon]);
        }, (error) => {
            reject(error);
        });
    });
}

export async function getLocation (name: string): Promise<[Latitude, Longitude]> {
    switch (name) {
        case "here":
            return promisedGeolocation();
        case "oslo":
            return [59.9111, 10.7503];
        case "stockholm":
            return [59.3268, 18.0718];
        case "helsingfors":
            return [60.1695, 24.9391];
    }

    throw new Error(`Unknown location: ${name}`);
}