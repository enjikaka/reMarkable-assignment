import { Link, useViewTransitionState } from "react-router";
import { InlineWeather } from "../inline-weather/inline-weather";
import type { Position } from "~/types";
import styles from "./weather-link.module.css";

import { clsx } from 'clsx';
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { locationDataQuery } from "~/queryClient";

type Props = Readonly<{
    position: Position;
    subtitle: string;
}>

export function WeatherLink(props: Props) {
    const [title, setTitle] = useState(props.position);
    const [subtitle, setSubtitle] = useState(props.subtitle);
    const locationData = useQuery(locationDataQuery(props.position, props.position === 'here'));

    const href = `/weather/${props.position}`;
    const graphic = `/${props.position}-stencil.svg`;
    const altText = `Stencil over ${props.position}`;

    useEffect(() => {
        if (locationData.data) {
            setTitle(locationData.data.features[0].properties.address.city ?? locationData.data.features[0].properties.address.village);
            setSubtitle(locationData.data.features[0].properties.address.country);
        }
    }, [locationData.data]);

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