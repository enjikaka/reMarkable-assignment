import { afterEach, beforeEach, expect, suite, test, vi } from "vitest";
import { getLocationData } from "./location-fetcher";

suite("getLocationData", () => {
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

		await getLocationData(59.9111, 10.7503);

		expect(mockFetch).toHaveBeenCalledWith(
			"https://nominatim.openstreetmap.org/reverse?lat=59.9111&lon=10.7503&format=geojson",
			{
				headers: {
					"User-Agent": "enjikaka-coding-assignment",
				},
			},
		);
	});
});
