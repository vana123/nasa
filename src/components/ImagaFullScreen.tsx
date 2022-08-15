import React from "react";

type Tprops = {
	imgSrc: string;
};

export default function ImageFullScreen({ imgSrc }: Tprops) {
	return (
		<div
			className="ImageFullScreen"
			style={{ position: "absolute", width: 100, height: 100 }}
		>
			<img src={imgSrc} alt="" />
		</div>
	);
}
