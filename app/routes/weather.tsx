import type { Route } from "./+types/weather";
import styles from "./weather.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Weather" },
  ];
}

export async function clientLoader({ params }: Route.LoaderArgs) {
  const { location } = params;
  const response = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.5&lon=0`);
  const data = await response.json();
  return { data };
}

export default function Weather({
  loaderData,
}: Route.ComponentProps) {
  return (
    <article className={styles.weatherArticle}>
      <h1>Weather</h1>
      {JSON.stringify(loaderData.data)}
    </article>
  );
}
