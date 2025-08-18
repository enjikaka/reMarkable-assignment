import {
  QueryClient,
  queryOptions,
} from '@tanstack/react-query'
import { getLocation, type Latitude, type Longitude } from './helpers/locations';
import { getWeatherData } from './helpers/weather-fetcher';
import type { Position } from './types';
import { getLocationData } from './helpers/location-fetcher';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {

      staleTime: 5 * 60 * 1000,

      gcTime: 10 * 60 * 1000,

      retry: 3,

      refetchOnWindowFocus: false,
    },
  },
});

export const weatherQuery = (position: Position) =>
  queryOptions({
    queryKey: ['weather', position],
    queryFn: async () => {
      const [lat, lon] = await getLocation(position);
      const weather = await getWeatherData(lat, lon);

      if (!weather) {
        throw new Response('', {
          status: 404,
          statusText: 'Not Found',
        })
      }

      return weather;
    },
  });

export const locationDataQuery = (position: Position) =>
  queryOptions({
    queryKey: ['locationData', position],
    queryFn: async () => {
      const [lat, lon] = await getLocation(position);
      const locationData = await getLocationData(lat, lon);

      if (!locationData) {
        throw new Response('', {
          status: 404,
          statusText: 'Not Found',
        })
      }

      return locationData;
    },
  });