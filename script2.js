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
let ballPosition = 'left';
let ballSpeed = 10;

// Logique :

function moveBall(){
    
    let ballSituation = ball.getBoundingClientRect();

    if(ballPosition == 'left'){
        ball.style.left = ballSituation.left + ballSpeed + 'px';
    }else{
        ball.style.left = ballSituation.left - ballSpeed + 'px';
    }

    if(ballSituation.left >= window.innerWidth){
        ballPosition = 'right';
    }else if(ballSituation.left <= 0){
        ballPosition = 'left';

    }

    
    console.log(window.innerWidth);
    console.log(ballSituation.left);

}

// setInterval(moveBall, 10);

moveBall();
