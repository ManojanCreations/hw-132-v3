img = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() 
{
    img = loadImage('https://image.shutterstock.com/image-photo/closeup-colorful-reusable-steel-thermo-260nw-1209661978.jpg');
}

function draw() 
{
    image(img, 0, 0, 640, 420);
    fill("#00FF00");
    text("Bottles", 45, 75);
    noFill();
    stroke("#00FF00");
    rect(30, 60, 450, 350 );
}