export interface YrGeoJSON {
	type: string;
	geometry: Geometry;
	properties: Properties;
}

export type SymbolCode =
	| "clearsky_day"
	| "clearsky_night"
	| "clearsky_polartwilight"
	| "fair_day"
	| "fair_night"
	| "fair_polartwilight"
	| "partlycloudy_day"
	| "partlycloudy_night"
	| "partlycloudy_polartwilight"
	| "cloudy"
	| "rainshowers_day"
	| "rainshowers_night"
	| "rainshowers_polartwilight"
	| "rainshowersandthunder_day"
	| "rainshowersandthunder_night"
	| "rainshowersandthunder_polartwilight"
	| "sleetshowers_day"
	| "sleetshowers_night"
	| "sleetshowers_polartwilight"
	| "snowshowers_day"
	| "snowshowers_night"
	| "snowshowers_polartwilight"
	| "rain"
	| "heavyrain"
	| "heavyrainandthunder"
	| "sleet"
	| "snow"
	| "snowandthunder"
	| "fog"
	| "sleetshowersandthunder_day"
	| "sleetshowersandthunder_night"
	| "sleetshowersandthunder_polartwilight"
	| "snowshowersandthunder_day"
	| "snowshowersandthunder_night"
	| "snowshowersandthunder_polartwilight"
	| "rainandthunder"
	| "sleetandthunder"
	| "lightrainshowersandthunder_day"
	| "lightrainshowersandthunder_night"
	| "lightrainshowersandthunder_polartwilight"
	| "heavyrainshowersandthunder_day"
	| "heavyrainshowersandthunder_night"
	| "heavyrainshowersandthunder_polartwilight"
	| "lightssleetshowersandthunder_day"
	| "lightssleetshowersandthunder_night"
	| "lightssleetshowersandthunder_polartwilight"
	| "heavysleetshowersandthunder_day"
	| "heavysleetshowersandthunder_night"
	| "heavysleetshowersandthunder_polartwilight"
	| "lightssnowshowersandthunder_day"
	| "lightssnowshowersandthunder_night"
	| "lightssnowshowersandthunder_polartwilight"
	| "heavysnowshowersandthunder_day"
	| "heavysnowshowersandthunder_night"
	| "heavysnowshowersandthunder_polartwilight"
	| "lightrainandthunder"
	| "lightsleetandthunder"
	| "heavysleetandthunder"
	| "lightsnowandthunder"
	| "heavysnowandthunder"
	| "lightrainshowers_day"
	| "lightrainshowers_night"
	| "lightrainshowers_polartwilight"
	| "heavyrainshowers_day"
	| "heavyrainshowers_night"
	| "heavyrainshowers_polartwilight"
	| "lightsleetshowers_day"
	| "lightsleetshowers_night"
	| "lightsleetshowers_polartwilight"
	| "heavysleetshowers_day"
	| "heavysleetshowers_night"
	| "heavysleetshowers_polartwilight"
	| "lightsnowshowers_day"
	| "lightsnowshowers_night"
	| "lightsnowshowers_polartwilight"
	| "heavysnowshowers_day"
	| "heavysnowshowers_night"
	| "heavysnowshowers_polartwilight"
	| "lightrain"
	| "lightsleet"
	| "heavysleet"
	| "lightsnow"
	| "heavysnow"
	| "clearsky_day"
	| "clearsky_night"
	| "clearsky_polartwilight"
	| "fair_day"
	| "fair_night"
	| "fair_polartwilight"
	| "partlycloudy_day"
	| "partlycloudy_night"
	| "partlycloudy_polartwilight"
	| "cloudy"
	| "rainshowers_day"
	| "rainshowers_night"
	| "rainshowers_polartwilight"
	| "rainshowersandthunder_day"
	| "rainshowersandthunder_night"
	| "rainshowersandthunder_polartwilight"
	| "sleetshowers_day"
	| "sleetshowers_night"
	| "sleetshowers_polartwilight"
	| "snowshowers_day"
	| "snowshowers_night"
	| "snowshowers_polartwilight"
	| "rain"
	| "heavyrain"
	| "heavyrainandthunder"
	| "sleet"
	| "snow"
	| "snowandthunder"
	| "fog"
	| "sleetshowersandthunder_day"
	| "sleetshowersandthunder_night"
	| "sleetshowersandthunder_polartwilight"
	| "snowshowersandthunder_day"
	| "snowshowersandthunder_night"
	| "snowshowersandthunder_polartwilight"
	| "rainandthunder"
	| "sleetandthunder"
	| "lightrainshowersandthunder_day"
	| "lightrainshowersandthunder_night"
	| "lightrainshowersandthunder_polartwilight"
	| "heavyrainshowersandthunder_day"
	| "heavyrainshowersandthunder_night"
	| "heavyrainshowersandthunder_polartwilight"
	| "lightssleetshowersandthunder_day"
	| "lightssleetshowersandthunder_night"
	| "lightssleetshowersandthunder_polartwilight"
	| "heavysleetshowersandthunder_day"
	| "heavysleetshowersandthunder_night"
	| "heavysleetshowersandthunder_polartwilight"
	| "lightssnowshowersandthunder_day"
	| "lightssnowshowersandthunder_night"
	| "lightssnowshowersandthunder_polartwilight"
	| "heavysnowshowersandthunder_day"
	| "heavysnowshowersandthunder_night"
	| "heavysnowshowersandthunder_polartwilight"
	| "lightrainandthunder"
	| "lightsleetandthunder"
	| "heavysleetandthunder"
	| "lightsnowandthunder"
	| "heavysnowandthunder"
	| "lightrainshowers_day"
	| "lightrainshowers_night"
	| "lightrainshowers_polartwilight"
	| "heavyrainshowers_day"
	| "heavyrainshowers_night"
	| "heavyrainshowers_polartwilight"
	| "lightsleetshowers_day"
	| "lightsleetshowers_night"
	| "lightsleetshowers_polartwilight"
	| "heavysleetshowers_day"
	| "heavysleetshowers_night"
	| "heavysleetshowers_polartwilight"
	| "lightsnowshowers_day"
	| "lightsnowshowers_night"
	| "lightsnowshowers_polartwilight"
	| "heavysnowshowers_day"
	| "heavysnowshowers_night"
	| "heavysnowshowers_polartwilight"
	| "lightrain"
	| "lightsleet"
	| "heavysleet"
	| "lightsnow"
	| "heavysnow"
	| "clearsky_day"
	| "clearsky_night"
	| "clearsky_polartwilight"
	| "fair_day"
	| "fair_night"
	| "fair_polartwilight"
	| "partlycloudy_day"
	| "partlycloudy_night"
	| "partlycloudy_polartwilight"
	| "cloudy"
	| "rainshowers_day"
	| "rainshowers_night"
	| "rainshowers_polartwilight"
	| "rainshowersandthunder_day"
	| "rainshowersandthunder_night"
	| "rainshowersandthunder_polartwilight"
	| "sleetshowers_day"
	| "sleetshowers_night"
	| "sleetshowers_polartwilight"
	| "snowshowers_day"
	| "snowshowers_night"
	| "snowshowers_polartwilight"
	| "rain"
	| "heavyrain"
	| "heavyrainandthunder"
	| "sleet"
	| "snow"
	| "snowandthunder"
	| "fog"
	| "sleetshowersandthunder_day"
	| "sleetshowersandthunder_night"
	| "sleetshowersandthunder_polartwilight"
	| "snowshowersandthunder_day"
	| "snowshowersandthunder_night"
	| "snowshowersandthunder_polartwilight"
	| "rainandthunder"
	| "sleetandthunder"
	| "lightrainshowersandthunder_day"
	| "lightrainshowersandthunder_night"
	| "lightrainshowersandthunder_polartwilight"
	| "heavyrainshowersandthunder_day"
	| "heavyrainshowersandthunder_night"
	| "heavyrainshowersandthunder_polartwilight"
	| "lightssleetshowersandthunder_day"
	| "lightssleetshowersandthunder_night"
	| "lightssleetshowersandthunder_polartwilight"
	| "heavysleetshowersandthunder_day"
	| "heavysleetshowersandthunder_night"
	| "heavysleetshowersandthunder_polartwilight"
	| "lightssnowshowersandthunder_day"
	| "lightssnowshowersandthunder_night"
	| "lightssnowshowersandthunder_polartwilight"
	| "heavysnowshowersandthunder_day"
	| "heavysnowshowersandthunder_night"
	| "heavysnowshowersandthunder_polartwilight"
	| "lightrainandthunder"
	| "lightsleetandthunder"
	| "heavysleetandthunder"
	| "lightsnowandthunder"
	| "heavysnowandthunder"
	| "lightrainshowers_day"
	| "lightrainshowers_night"
	| "lightrainshowers_polartwilight"
	| "heavyrainshowers_day"
	| "heavyrainshowers_night"
	| "heavyrainshowers_polartwilight"
	| "lightsleetshowers_day"
	| "lightsleetshowers_night"
	| "lightsleetshowers_polartwilight"
	| "heavysleetshowers_day"
	| "heavysleetshowers_night"
	| "heavysleetshowers_polartwilight"
	| "lightsnowshowers_day"
	| "lightsnowshowers_night"
	| "lightsnowshowers_polartwilight"
	| "heavysnowshowers_day"
	| "heavysnowshowers_night"
	| "heavysnowshowers_polartwilight"
	| "lightrain"
	| "lightsleet"
	| "heavysleet"
	| "lightsnow"
	| "heavysnow";

export interface Geometry {
	type: string;
	coordinates: number[];
}

export interface Properties {
	meta: Meta;
	timeseries: Series[];
}

export interface Meta {
	updated_at: string;
	units: Units;
}

export interface Units {
	air_pressure_at_sea_level: string;
	air_temperature: string;
	cloud_area_fraction: string;
	precipitation_amount: string;
	relative_humidity: string;
	wind_from_direction: string;
	wind_speed: string;
}

export interface Series {
	time: string;
	data: Data;
}

export interface Data {
	instant: Instant;
	next_12_hours?: Next12Hours;
	next_1_hours?: Next1Hours;
	next_6_hours?: Next6Hours;
}

export interface Instant {
	details: Details;
}

export interface Details {
	air_pressure_at_sea_level: number;
	air_temperature: number;
	cloud_area_fraction: number;
	relative_humidity: number;
	wind_from_direction: number;
	wind_speed: number;
}

export interface Next12Hours {
	summary: Summary;
	details: Details2;
}

export interface Summary {
	symbol_code: SymbolCode;
}

export interface Details2 {}

export interface Next1Hours {
	summary: Summary;
	details: Details3;
}

export interface Details3 {
	precipitation_amount: number;
}

export interface Next6Hours {
	summary: Summary;
	details: Details4;
}

export interface Details4 {
	precipitation_amount: number;
}
