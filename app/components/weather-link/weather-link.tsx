import { Link, useViewTransitionState } from "react-router";
import { InlineWeather } from "../inline-weather/inline-weather";
import type { Position } from "~/types";
import styles from "./weather-link.module.css";

import { clsx } from 'clsx';

type Props = Readonly<{
    position: Position;
    subtitle: string;
}>

export function WeatherLink(props: Props) {
    const href = `/weather/${props.position}`;
    const graphic = `/${props.position}-stencil.svg`;
    const altText = `Stencil over ${props.position}`;

    const isTransitioning = useViewTransitionState(href);

    return (
        <Link to={href} className={styles.weatherLink} viewTransition>
            <figure>
                <InlineWeather position={props.position} className={styles.inlineWeather} />
                <div className={styles.imageWrapper}>
                    <img className={clsx(isTransitioning && styles.transitioningImage)} src={graphic} alt={altText} />
                </div>
                <figcaption>
                    <span className={clsx(isTransitioning && styles.transitioningTitle)}>{props.position}</span>
                    <span>{props.subtitle}</span>
                </figcaption>
            </figure>
        </Link>
    );
}