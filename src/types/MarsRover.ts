export type TMarsRover = {
	photos: {
		camera: camera;
		earth_date: string;
		id: number;
		img_src: string;
		rover: rover;
		sol: number;
	}[];
};
export type camera = {
	full_name: string;
	id: number;
	name: string;
	rover_id: number;
};
export type rover = {
	id: number;
	landing_date: string;
	launch_date: string;
	name: string;
	status: string;
};
