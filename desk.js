img = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() 
{
    img = loadImage('https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVza3xlbnwwfHwwfHw%3D&w=1000&q=80');
}

function draw() 
{
    image(img, 0, 0, 640, 420);
    fill("#FFA500");
    text("Desk", 45, 75);
    noFill();
    stroke("#FFA500");
    rect(30, 60, 450, 350 );

    fill("#FFA500");
    text("Phone", 335, 335);
    noFill();
    stroke("#FFA500");
    rect(320, 320, 170, 50 );
}