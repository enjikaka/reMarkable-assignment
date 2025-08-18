import { Link } from "react-router";
import { InlineWeather } from "../inline-weather/inline-weater";
import type { Position } from "~/types";
import styles from "./weather-link.module.css";

type Props = Readonly<{
    position: Position;
    subtitle: string;
}>

export function WeatherLink(props: Props) {
    const href = `/weather/${props.position}`;
    const graphic = `/${props.position}-stencil.svg`;
    const altText = `Stencil over ${props.position}`;

    return (
        <Link to={href} className={styles.weatherLink}>
            <InlineWeather position={props.position} />
            <figure>
                <img src={graphic} alt={altText} />
                <figcaption>
                    <span>{props.position}</span>
                    <span>{props.subtitle}</span>
                </figcaption>
            </figure>
        </Link>
    );
}