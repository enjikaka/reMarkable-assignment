import { useQuery } from '@tanstack/react-query'
import { getLocation, type Latitude, type Longitude } from '~/helpers/locations';
import { getWeatherData } from '~/helpers/weather-fetcher';
import type { Position } from '~/types';

type Props = Readonly<{
    position: Position;
}>;

async function queryFetcher(position: Props['position']) {
    const [lat, lon] = await getLocation(position);
    return getWeatherData(lat, lon);
}

export function InlineWeather(props: Props) {
    const weather = useQuery({ queryKey: ['todos'], queryFn: () => queryFetcher(props.position) })

    return (
        <div>
            {weather.data?.properties.timeseries[0].data.instant.details.air_temperature} C
        </div>
    );
}