import { expect, suite, test, vi, beforeEach, afterEach } from "vitest";
import { getWeatherData } from "./weather-fetcher";

suite("getWeatherData", () => {
	beforeEach(() => {
		vi.stubGlobal("fetch", vi.fn());
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	test("calls Nominatim API with custom User-Agent", async () => {
		const mockFetch = vi.mocked(fetch);
		const mockResponse = { json: vi.fn().mockResolvedValue({}) };
		mockFetch.mockResolvedValue(mockResponse as any);

		await getWeatherData(59.9111, 10.7503);

		expect(mockFetch).toHaveBeenCalledWith(
			"https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.9111&lon=10.7503",
			{
				headers: {
					"User-Agent": "enjikaka-coding-assignment",
				},
			},
		);
	});
});
