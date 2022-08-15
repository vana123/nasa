import React, { useState } from "react";
import { Container } from "@mui/system";
import { useAppSelector } from "../hook/reducer";
import { ImageList, ImageListItem, Modal, Box } from "@mui/material";
import { useGetMarsRoverQuery } from "../service/nasaService";
import MarsRoverForm from "../components/MarsRover/MarsRoverForm";
import { Rings, ThreeDots } from "react-loader-spinner";

const styleModal = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

export default function MarsRoverPage() {
	const { earth_date, sol, camera } = useAppSelector(
		(state) => state.marsRoverReducer
	);
	const { data, isLoading, isFetching } = useGetMarsRoverQuery({
		earth_date: earth_date,
		sol: sol,
		camera: camera,
	});

	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const [modalImg, setModalImg] = useState("#");

	if (isLoading) {
		return (
			<div className="MarsRover">
				<MarsRoverForm />
				<Rings color="#00BFFF" height={80} width={80} />
			</div>
		);
	}
	if (isFetching) {
		return (
			<div className="MarsRover">
				<MarsRoverForm />
				<Container maxWidth={"md"}>
					<ThreeDots color="#00DAAA" height={80} width={80} />
				</Container>
			</div>
		);
	}
	if (!data) {
		return (
			<div className="MarsRover">
				<MarsRoverForm />
				no data exist
			</div>
		);
	}
	return (
		<div className="MarsRover">
			<MarsRoverForm />

			<Container maxWidth={"md"}>
				{data.photos[0] ? (
					<ImageList variant="quilted" cols={3}>
						{data.photos.map((item) => (
							<ImageListItem key={item.img_src}>
								<img
									src={item.img_src}
									alt={item.camera.full_name}
									loading="lazy"
									onClick={() => {
										setOpen(true);
										setModalImg(item.img_src);
									}}
								/>
							</ImageListItem>
						))}
					</ImageList>
				) : (
					<div>no photos exist</div>
				)}
			</Container>

			<Modal open={open} onClose={handleClose}>
				<Box sx={styleModal}>
					<img src={modalImg} alt="" width={"100%"} />
				</Box>
			</Modal>
		</div>
	);
}
