import styles from "./weather-links.module.css";
import { WeatherLink } from "../weather-link/weather-link";

export function WeatherLinks() {
  return (
    <section className={styles.weatherLinks}>
      <WeatherLink position="here" subtitle="My location" />
      <WeatherLink position="oslo" subtitle="Norway" />
      <WeatherLink position="stockholm" subtitle="Sweden" />
      <WeatherLink position="helsingfors" subtitle="Finland" />
      <WeatherLink position="copenhagen" subtitle="Denmark" />
    </section>
  );
}