// Je créer une balle entièrement en JS
const ball = document.createElement('div');
ball.style.height = '50px';
ball.style.width = '50px';
ball.style.background = 'red';
ball.style.borderRadius = '50%';
// Je définis la position initial de la balle
ball.style.position = 'absolute';
ball.style.left = '0';
ball.style.top = '0';

//J'appel la balle dans le DOM
document.body.appendChild(ball);

// Global variable :
let ballX = 0;
let ballY = 0;
let ballSpeedX = 20;
let ballSpeedY = 20;

let randomColor1 = Math.floor(Math.random()* 255);
let randomColor2 = Math.floor(Math.random()* 255);
let randomColor3 = Math.floor(Math.random()* 255);
let randomColor4 = Math.floor(Math.random()* 255);
let randomColor5 = Math.floor(Math.random()* 255);
let randomColor6 = Math.floor(Math.random()* 255);
let randomColor7 = Math.floor(Math.random()* 255);
let randomColor8 = Math.floor(Math.random()* 255);
let randomColor9 = Math.floor(Math.random()* 255);
let randomColor10 = Math.floor(Math.random()* 255);
let randomColor11 = Math.floor(Math.random()* 255);
let randomColor12 = Math.floor(Math.random()* 255);


// Logique :

function moveBall(){

  let randomHeight = Math.floor(Math.random()* 100) + 'px';
  let randomHeight2 = Math.floor(Math.random()* 100) + 'px';
  let randomHeight3 = Math.floor(Math.random()* 100) + 'px';
  let randomHeight4 = Math.floor(Math.random()* 100) + 'px';

  ballX += ballSpeedX;
  ballY += ballSpeedY;
    
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';

  if(ballX > window.innerWidth - 50){
    ballSpeedX = -ballSpeedX;
    ball.style.background = `rgb(${randomColor1}, ${randomColor2},${randomColor3})`;
    ball.style.height = randomHeight;
    ball.style.width = randomHeight;
  }

  if(ballX < 0){
    ballSpeedX = -ballSpeedX;
    ball.style.background = `rgb(${randomColor4}, ${randomColor5},${randomColor6})`;
    ball.style.height = randomHeight2;
    ball.style.width = randomHeight2;
  }

  if(ballY > window.innerHeight -50){
    ballSpeedY = -ballSpeedY;
    ball.style.background = `rgb(${randomColor7}, ${randomColor8},${randomColor9})`;
    ball.style.height = randomHeight3;
    ball.style.width = randomHeight3;
  }

  if(ballY < 0){
    ballSpeedY = -ballSpeedY;
    ball.style.background = `rgb(${randomColor10}, ${randomColor11},${randomColor12})`;
    ball.style.height = randomHeight4;
    ball.style.width = randomHeight4;
  }

  requestAnimationFrame(moveBall);

  console.log('helo')

    

}


moveBall();

// setInterval(moveBall, 10);
