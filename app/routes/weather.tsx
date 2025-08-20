import type { Route } from "./+types/weather";
import styles from "./weather.module.css";

import { locationDataQuery, queryClient, weatherQuery } from "~/queryClient";
import type { Position } from "~/types";
import { useLoaderData } from "react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { yrSymbolCodeToWeatherIcon } from "~/helpers/icon-mapper";
import { parseTown } from "~/helpers/geocode-parser";
import { Forecast } from "~/components/forecast/forecast";
import { InlineWeather } from "~/components/inline-weather/inline-weather";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Weather" },
  ];
}

export async function clientLoader({ params }: Route.LoaderArgs) {
  const { location: position } = params;

  await Promise.all([
    queryClient.ensureQueryData(locationDataQuery(position as Position)),
    queryClient.ensureQueryData(weatherQuery(position as Position))
  ]);

  return { position: position as Position };
}

export default function Weather() {
  const { position } = useLoaderData() as Awaited<
    ReturnType<typeof clientLoader>
  >;

  const { data: weather } = useSuspenseQuery(weatherQuery(position));
  const { data: location } = useSuspenseQuery(locationDataQuery(position));

  const cityOrVillage = parseTown(location.features[0].properties.address);

  return (
    <article className={styles.weatherArticle}>
      <header>
        <img className={styles.stencil} src={`/${position}-stencil.svg`} alt={`Stencil over ${position}`} />
        <h1>{cityOrVillage}</h1>
      </header>
      <div className={styles.weatherBlock}>
        <img className={styles.icon} src={'/weather-icons/' + yrSymbolCodeToWeatherIcon(weather.properties.timeseries[0].data.next_1_hours.summary.symbol_code) + '.svg'} alt={`Weather icon for ${position}`} />
        <InlineWeather position={position} className={styles.temperature} />
      </div>
      <Forecast position={position} className={styles.forecast} />
    </article>
  );
}
