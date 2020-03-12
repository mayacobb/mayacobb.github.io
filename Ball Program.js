var ballX;
var ballY;
var dirX=3;
var dirY=3
var y = 300;

function setup() {
    createCanvas(600, 600);
    ballX = random(30,575);
    ballY = random(30,575);
}

function draw() {
    background(10, 100, 200);

    ellipse(ballX, ballY, 50, 50);

    ballX+=dirX;
    ballY+=dirY;

    if (ballX >= width-25) {
        dirX *= -1;
    }
    else if (ballY <= 25) {
        dirY *= -1;
    }
    else if (ballY >= height-25) {
        dirY *= -1;
    }
    else if (ballY < 25)  {
        dirX *= -1;
    }
    else if (ballX < 25) {
        dirX *= -1;
    }

}

