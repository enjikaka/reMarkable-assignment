export async function getLocationData(lat: number, lon: number) {
	const response = await fetch(
		`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=geojson`,
		{
			headers: {
				"User-Agent": "enjikaka-coding-assignment",
			},
		},
	);
	const data = await response.json();

	return data;
}
