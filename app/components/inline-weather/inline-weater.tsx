import { useQuery } from '@tanstack/react-query'
import { weatherQuery } from '~/queryClient';
import type { Position } from '~/types';

type Props = Readonly<{
    position: Position;
    className?: string;
}>;

export function InlineWeather(props: Props) {
    const weather = useQuery(weatherQuery(props.position));

    return (
        <div className={props.className}>
            {weather.data?.properties.timeseries[0].data.instant.details.air_temperature} C
        </div>
    );
}