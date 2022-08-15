import React from "react";
import {
	Container,
	InputLabel,
	MenuItem,
	NativeSelect,
	Select,
	SelectChangeEvent,
	TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hook/reducer";
import {
	setCamera,
	setEarth_date,
	setSol,
} from "../../store/slise/MarsRoverSlice";

export default function MarsRoverForm() {
	const dispatch = useAppDispatch();
	const { earth_date, sol, camera } = useAppSelector(
		(state) => state.marsRoverReducer
	);

	return (
		<div>
			<Container maxWidth="md">
				<TextField
					id="date"
					label="earth date"
					type="date"
					sx={{ width: 220, margin: 1 }}
					InputLabelProps={{
						shrink: true,
					}}
					value={earth_date}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						dispatch(setSol(0));
						dispatch(setEarth_date(event.target.value));
					}}
				/>
				<TextField
					id="sol"
					label="sol"
					type="number"
					sx={{ width: 220, margin: 1 }}
					InputLabelProps={{
						shrink: true,
					}}
					value={sol}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						dispatch(setEarth_date(""));
						dispatch(setSol(Number(event.target.value)));
					}}
				/>
				{/* <InputLabel>Camera</InputLabel> */}
				<Select
					sx={{ margin: 1 }}
					value={camera}
					label="Camera"
					onChange={(event: SelectChangeEvent) => {
						dispatch(setCamera(event.target.value));
					}}
				>
					<MenuItem value="">
						<em>all</em>
					</MenuItem>
					<MenuItem value={"FHAZ"}>FHAZ</MenuItem>
					<MenuItem value={"RHAZ"}>RHAZ</MenuItem>
					<MenuItem value={"MAST"}>MAST</MenuItem>
					<MenuItem value={"CHEMCAM"}>CHEMCAM</MenuItem>
					<MenuItem value={"MAHLI"}>MAHLI</MenuItem>
					<MenuItem value={"MARDI"}>MARDI</MenuItem>
					<MenuItem value={"NAVCAM"}>NAVCAM</MenuItem>
					<MenuItem value={"PANCAM"}>PANCAM</MenuItem>
					<MenuItem value={"MINITES"}>MINITES</MenuItem>
				</Select>
			</Container>
		</div>
	);
}
