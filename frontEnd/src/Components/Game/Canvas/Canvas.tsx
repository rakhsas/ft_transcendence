import React , {useRef, useEffect} from "react";
import useCanvas from "./useCanvas";

const Canvas = props => {
	const {drawRect, drawCircle, drawText, drawLine, ...rest} = props;
	const ref = useCanvas(props);

	return (
		<canvas ref={ref} {...rest} />
	);
}

export default Canvas;