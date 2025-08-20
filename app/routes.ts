import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("/weather/:location", "routes/weather.tsx"),
] satisfies RouteConfig;
