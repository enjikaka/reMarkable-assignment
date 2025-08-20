import { Link, useViewTransitionState } from "react-router";
import { InlineWeather } from "../inline-weather/inline-weather";
import type { Position } from "~/types";
import styles from "./weather-link.module.css";

import { clsx } from 'clsx';
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { locationDataQuery } from "~/queryClient";
import { parseTown } from "~/helpers/geocode-parser";

type Props = Readonly<{
    position: Position;
    subtitle: string;
}>

export function WeatherLink(props: Props) {
    const locationData = useQuery(locationDataQuery(props.position, props.position === 'here'));

    const [title, subtitle] = useMemo<[string, string]>(() => {
        if (locationData.data && props.position === 'here') {
            return [parseTown(locationData.data.features[0].properties.address), locationData.data.features[0].properties.address.country];
        }

        return [props.position, props.subtitle];
    }, [locationData.data, props.position]);

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
                    <span className={clsx(isTransitioning && styles.transitioningTitle)}>{title}</span>
                    <span>{subtitle}</span>
                </figcaption>
            </figure>
        </Link>
    );
}