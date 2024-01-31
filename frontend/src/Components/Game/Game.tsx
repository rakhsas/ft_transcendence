import Canvas from './Canvas'

function Game(): JSX .Element{
  return(
    <div className="game--container bg-black w-full  h-lvh flex justify-center items-center ">
      <Canvas />
    </div>
  )
}

export default Game;
