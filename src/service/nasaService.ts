import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, API_URL } from "../consts/api";
import { TMarsRover } from "../types/MarsRover";

export const nasaAPI = createApi({
	reducerPath: "nasaAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getMarsRover: build.query<TMarsRover, any>({
			query: ({ earth_date, sol, camera }) =>
				`mars-photos/api/v1/rovers/curiosity/photos?${
					earth_date ? `earth_date=${earth_date}` : `sol=${sol}`
				}&${camera ? `camera=${camera}` : ""}&api_key=${API_KEY}`,
		}),
		getManifests: build.query<TMarsRover, any>({
			query: () => `manifests/curiosity?api_key=${API_KEY}`,
		}),
		// manifests/curiosity?api_key=DEMO_KEY
	}),
});

export const { useGetMarsRoverQuery } = nasaAPI;
