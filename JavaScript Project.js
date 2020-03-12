function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    var r = random (0,255);
    var g = 0;
    var b = random(0,255);

    fill(r, g, b, 100);
    noStroke()

    var a = random(0, 400);
    var b = random(0, 400);

    ellipse(a, b, 25, 25);

}