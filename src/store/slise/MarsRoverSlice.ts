import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TmarsRoverSlice = {
	earth_date: string;
	sol: number;
	camera: string;
};

const initialState: TmarsRoverSlice = {
	earth_date: "2014-06-24",
	sol: 0,
	camera: "FHAZ",
};

export const marsRoverSlice = createSlice({
	name: "marsRover",
	initialState,
	reducers: {
		setEarth_date(state, action: PayloadAction<string>) {
			state.earth_date = action.payload;
		},
		setSol(state, action: PayloadAction<number>) {
			state.sol = action.payload;
		},
		setCamera(state, action: PayloadAction<string>) {
			state.camera = action.payload;
		},
	},
});

export const { setEarth_date, setSol, setCamera } = marsRoverSlice.actions;
export const marsRoverReducer = marsRoverSlice.reducer;
