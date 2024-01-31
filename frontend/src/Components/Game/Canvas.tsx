import game from './pong.js'
import React from 'react';

const Canvas = () => {

  React.useEffect (() => {
    const canvas = document.querySelector("#pong");
    game(canvas);
  } , [])

  return(
    <canvas id="pong"
      width="600"
      height="400"
      className=" border-[#59CE8F] w-fit border-2">


    </canvas>
  );
}

export default Canvas;
