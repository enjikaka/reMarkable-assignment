import { getLocation } from "~/helpers/locations";
import type { Route } from "./+types/weather";
import styles from "./weather.module.css";

import { getWeatherData } from "~/helpers/weather-fetcher";
import { getLocationData } from "~/helpers/location-fetcher";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Weather" },
  ];
}

export async function clientLoader({ params }: Route.LoaderArgs) {
  const { location } = params;
  const [lat, lon] = await getLocation(location);

  const [
    weatherData,
    locationData
  ] = await Promise.all([
    getWeatherData(lat, lon),
    getLocationData(lat, lon),
  ]);

  return { weather: weatherData, location: locationData };
}

export default function Weather({
  loaderData,
}: Route.ComponentProps) {
  return (
    <article className={styles.weatherArticle}>
      <h1>{loaderData.location.features[0].properties.address.city ?? loaderData.location.features[0].properties.address.village}</h1>
      {loaderData.weather.properties.timeseries[0].data.instant.details.air_temperature}
    </article>
  );
}
