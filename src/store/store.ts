import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { nasaAPI } from "../service/nasaService";
import { marsRoverReducer } from "./slise/MarsRoverSlice";

const rootReducer = combineReducers({
	marsRoverReducer,
	[nasaAPI.reducerPath]: nasaAPI.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(nasaAPI.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
