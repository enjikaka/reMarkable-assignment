import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx';
import { useViewTransitionState } from 'react-router';
import { weatherQuery } from '~/queryClient';
import type { Position } from '~/types';

import styles from './inline-weather.module.css';

type Props = Readonly<{
    position: Position;
    className?: string;
}>;

export function InlineWeather(props: Props) {
    const weather = useQuery(weatherQuery(props.position));

    const href = `/weather/${props.position}`;
    const isTransitioning = useViewTransitionState(href);

    return (
        <div className={clsx(props.className, isTransitioning && styles.transitioning)}>
            {weather.data?.properties.timeseries[0].data.instant.details.air_temperature} °C
        </div>
    );
}