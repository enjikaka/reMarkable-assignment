import { useQuery } from "@tanstack/react-query";
import { weatherQuery } from "~/queryClient";
import type { Position } from "~/types";
import styles from "./forecast.module.css";
import { yrSymbolCodeToWeatherIcon } from "~/helpers/icon-mapper";
import type { YrGeoJSON } from "~/yr.types";

type Props = Readonly<{
    position: Position;
}>;

export function Forecast(props: Props) {
    const weather = useQuery(weatherQuery(props.position));
    const geojson = weather.data as YrGeoJSON;

    return (
        <div className={styles.forecast}>
            {geojson.properties.timeseries.map(timeSeries => {
                const symbolCode = timeSeries.data.next_1_hours?.summary.symbol_code;
                const icon = symbolCode ? yrSymbolCodeToWeatherIcon(symbolCode) : 'cloudy';

                return (
                    <div className={styles.forecastItem} key={timeSeries.time}>
                        <div className={styles.forecastItemTime}>
                            {new Date(timeSeries.time).toLocaleDateString('nb-NO', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </div>
                        <div className={styles.forecastItemIcon}>
                            <img src={`/weather-icons/${icon}.svg`} alt={symbolCode} />
                        </div>
                        <div className={styles.forecastItemTemperature}>{timeSeries.data.instant.details.air_temperature} °C</div>
                    </div>
                );
            })}
        </div>
    );
}