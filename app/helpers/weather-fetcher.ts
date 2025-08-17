export async function getWeatherData(lat: number, lon: number) {
    const response = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`, {
        headers: {
            "User-Agent": "enjikaka-coding-assignment",
        },
    });
    const data = await response.json();

    return data;
}