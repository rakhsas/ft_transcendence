import React from "react";


interface CanvasProps {
	width: number;
	height: number;
	border?: string;
}

const Canvas = (props: CanvasProps) => {
	const ref = React.useRef(null);

	React.useEffect(() => {

		const canvas = ref.current;
		if (!canvas) {
			return;
		}
		const context = canvas.getContext('2d');
		context.reset();
		context.beginPath();
		context.arc(100, 75, 50, 0, 2 * Math.PI);
		context.stroke();
	},[]);

	return ( <canvas ref={ref} {...props} />);
};


export default Canvas;