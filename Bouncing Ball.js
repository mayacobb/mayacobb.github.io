var ballX = 200.0
var ballY = 6.0
var ballSpeedY = 1.0
var dirY = 1;
var gravity = 0.1;
var red1 = 0;
var green1 = 0;
var blue1 = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(100, 200, 250);

    //to make the ball "fall" down, every frame we increase its speed by a tiny amount. We call this amount gravity.

    fill(red1, green1, blue1)
    ellipse(ballX, ballY, 20.0, 20.0)

    ballSpeedY = ballSpeedY + gravity;
    ballY += ballSpeedY;

    if (ballY >= height-10 ) {
        ballSpeedY *= -1;
        blue1 += 50;
        green1+=20;
        red1+=50;
    }
    else if (ballY <= 5) {
        ballSpeedY *= -1

    }





}
