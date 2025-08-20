import { useQuery } from "@tanstack/react-query";
import { clsx } from "clsx";
import { useMemo } from "react";
import { Link, useViewTransitionState } from "react-router";
import { parseTown } from "~/helpers/geocode-parser";
import { locationDataQuery } from "~/queryClient";
import type { Position } from "~/types";
import { InlineWeather } from "../inline-weather/inline-weather";
import styles from "./weather-link.module.css";

type Props = Readonly<{
	position: Position;
	subtitle: string;
}>;

export function WeatherLink(props: Props) {
	const locationData = useQuery(
		locationDataQuery(props.position, props.position === "here"),
	);

	const [title, subtitle] = useMemo<[string, string]>(() => {
		if (
			locationData.data &&
			locationData.isSuccess &&
			props.position === "here"
		) {
			return [
				parseTown(locationData.data.features[0].properties.address),
				locationData.data.features[0].properties.address.country,
			];
		}

		return [props.position, props.subtitle];
	}, [
		locationData.isSuccess,
		locationData.data,
		props.position,
		props.subtitle,
	]);

	const href = `/weather/${props.position}`;
	const graphic = `/${props.position}-stencil.svg`;
	const altText = `Stencil over ${props.position}`;

	const isTransitioning = useViewTransitionState(href);

	return (
		<Link to={href} className={styles.weatherLink} viewTransition>
			<figure>
				<InlineWeather
					position={props.position}
					className={styles.inlineWeather}
				/>
				<div className={styles.imageWrapper}>
					<img
						className={clsx(isTransitioning && styles.transitioningImage)}
						src={graphic}
						alt={altText}
					/>
				</div>
				<figcaption>
					<span className={clsx(isTransitioning && styles.transitioningTitle)}>
						{title}
					</span>
					<span>{subtitle}</span>
				</figcaption>
			</figure>
		</Link>
	);
}
