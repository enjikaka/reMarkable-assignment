import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useMemo } from "react";
import { useViewTransitionState } from "react-router";
import { weatherQuery } from "~/queryClient";
import type { Position } from "~/types";
import styles from "./inline-weather.module.css";

type Props = Readonly<{
	position: Position;
	className?: string;
}>;

export function InlineWeather(props: Props) {
	const weather = useQuery(weatherQuery(props.position));

	const temperature = useMemo<string>(() => {
		if (!weather.isSuccess) {
			return "Loading...";
		}

		return `${
			weather.data?.properties.timeseries[0].data.instant.details
				.air_temperature
		} °C`;
	}, [weather.isSuccess, weather.data]);

	const href = `/weather/${props.position}`;
	const isTransitioning = useViewTransitionState(href);

	return (
		<div
			className={clsx(props.className, isTransitioning && styles.transitioning)}
		>
			{temperature}
		</div>
	);
}
