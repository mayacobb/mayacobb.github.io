function setup() {
    createCanvas(600, 600);
    // Placing the background in the setup function prevents the background from being drawn again and again. This way, you can see all of the bowties.
    background(220, 50, 100);
    print("Hello World")
}

function draw() {
    noStroke()
    fill("white")
    // Order of the quad points matters - I used this to create a bow tie instead of a square
    quad(mouseX, mouseY, mouseX + 10, mouseY +10 , mouseX + 10, mouseY, mouseX, mouseY + 10);

}
