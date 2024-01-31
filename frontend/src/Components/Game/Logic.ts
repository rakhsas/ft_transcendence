
// Game Variables ==================
const COM_LEVEL = 0.2;
const PLAYER_HEIGHT = 100;
const PLAYER_WIDTH = 20;
const BALL_START_SPEED = 0.5;
const BALL_DELTA_SPEED = 0.1;

class Game{

  constructor(canvas){
    // Game Objects ======================
    const player = {
      x: 0,
      y: canvas.height / 2 - PLAYER_HEIGHT / 2,
      width: PLAYER_WIDTH,
      height: PLAYER_HEIGHT,
      color: "#3AB0FF",
      score: 0,
    };

    const computer = {
      x: canvas.width - PLAYER_WIDTH,
      y: canvas.height / 2 - PLAYER_HEIGHT / 2,
      width: PLAYER_WIDTH,
      height: PLAYER_HEIGHT,
      color: "#FF1E00",
      score: 0,
    };

    const ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 10,
      speed: BALL_START_SPEED,
      velocityX: 5,
      velocityY: 5,
      color: "#3AB0FF",
    };

    const net = {
      x: canvas.width / 2 - 1,
      y: 0,
      width: 2,
      height: 10,
      color: "#59CE8F",
    };

  }

   update() {
    console.log(this._ball.name);
    console.log('update')
    
  }
   run() {
    console.log('run')
  }

};



const game = new Game();

game.update();
game.run();

