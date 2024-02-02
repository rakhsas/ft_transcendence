import React from "react";

interface CanvasProps {
	width: number;
	height: number;
}

const Canvas = (props: CanvasProps) => {
	const { width, height } = props;
	return (
		<canvas width={width} height={height} className="border-black b-4" />
	);
}

export default Canvas;