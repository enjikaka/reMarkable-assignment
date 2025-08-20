import type { SymbolCode } from "~/yr.types";

type AvailableWeatherIcons =
	| "clearsky_day"
	| "cloudy"
	| "fair_day"
	| "heavyrain"
	| "rain"
	| "rainshowersandthunder_day"
	| "rainshowers_day"
	| "sleet"
	| "sleetshowers_day"
	| "snow"
	| "snowshowers_day";

export function yrSymbolCodeToWeatherIcon(
	symbol: SymbolCode,
): AvailableWeatherIcons {
	switch (symbol) {
		case "clearsky_day":
		case "cloudy":
		case "fair_day":
		case "heavyrain":
		case "rain":
		case "rainshowersandthunder_day":
		case "rainshowers_day":
		case "sleet":
		case "sleetshowers_day":
		case "snow":
		case "snowshowers_day":
			return symbol;
		default:
			console.warn("Missing weather icon, defaulting to cloud; " + symbol);
			return "cloudy";
	}
}
