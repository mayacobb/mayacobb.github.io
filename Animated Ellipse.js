// This program has boundary conditions so that the ellipse bounces off the boundaries set. The color changes as the ellipse bounces off of the boundaries. The width also changes so the ellipse squishes then expands as the draw loop iterates. The dirX function is meant to change the direction of the ellipse from positive to negative as the ellipse bounces off of the walls.

var circleX = 50;
var dirX = 1;
var red1 = 0;
var green1 = 0;
var blue1 = 0;
var sizeX = 50;
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(red1, green1, blue1);
    ellipse(circleX, 100, sizeX, 50);
    circleX += dirX*10;

    if (circleX > 350 ) {
        dirX *= -1;
        circleX += dirX;
        sizeX += dirX;
        red1 += 20;
        green1 += 10;
    }
    else if (circleX < 45){
        dirX *= -1;
        circleX += dirX;
        blue1 += 30;

    }

}