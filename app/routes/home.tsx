import type { Route } from "./+types/home";
import { WeatherLink } from "~/components/weather-link/weather-link";
import styles from "./home.module.css";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <section className={styles.weatherLinks}>
        <WeatherLink position="here" subtitle="My location" />
        <WeatherLink position="oslo" subtitle="Norway" />
        <WeatherLink position="stockholm" subtitle="Sweden" />
        <WeatherLink position="helsingfors" subtitle="Finland" />
        <WeatherLink position="copenhagen" subtitle="Denmark" />
        <WeatherLink position="reykjavik" subtitle="Iceland" />
        <WeatherLink position="mariehamn" subtitle="Åland" />
      </section>
    </>
  );
}
