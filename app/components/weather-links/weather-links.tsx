import { Link } from "react-router";

import styles from "./weather-links.module.css";


export function WeatherLinks() {
  return (
    <section className={styles.weatherLinks}>
      <Link to="/weather/here">
        <figure>
          <img src="/pointer.svg" alt="Pointer representing my location" />
          <figcaption>
            <span>My location</span>
            <span>World</span>
          </figcaption>
        </figure>
      </Link>
      <Link to="/weather/oslo">
        <figure>
          <img src="/oslo-stencil.svg" alt="Stencil over Oslo" />
          <figcaption>
            <span>Oslo</span>
            <span>Norway</span>
          </figcaption>
        </figure>
      </Link>
      <Link to="/weather/stockholm">
        <figure>
          <img src="/stockholm-stencil.svg" alt="Stencil over Stockholm" />
          <figcaption>
            <span>Stockholm</span>
            <span>Sweden</span>
          </figcaption>
        </figure>
      </Link>
      <Link to="/weather/helsingfors">
        <figure>
          <img src="/helsingfors-stencil.svg" alt="Stencil over Helsingfors" />
          <figcaption>
            <span>Helsingfors</span>
            <span>Finland</span>
          </figcaption>
        </figure>
      </Link>
      <Link to="/weather/copenhagen">
        <figure>
          <img src="/copenhagen-stencil.svg" alt="Stencil over Copenhagen" />
          <figcaption>
            <span>Copenhagen</span>
            <span>Denmark</span>
          </figcaption>
        </figure>
      </Link>
    </section>
  );
}