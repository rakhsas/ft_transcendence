import React from 'react';
import Canvas from './Canvas/Canvas';

const Game: React.ElementType = () => {
	return (
		<div className='h-[100vh] w-fill flex justify-center items-center flex-wrap'>
			<Canvas 
				className="border-black border-2"  
				width={600}
				height={400}
			/>
		</div>
	);
}
export default Game;
