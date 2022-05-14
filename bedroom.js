img = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() 
{
    img = loadImage('https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1454806.jpg&fm=jpg');
}

function draw() 
{
    image(img, 0, 0, 640, 420);
    fill("#0000FF");
    text("Bed", 45, 75);
    noFill();
    stroke("#0000FF");
    rect(30, 60, 450, 350 );
   
    fill("#0000FF");
    text("Door", 525, 45);
    noFill();
    stroke("#0000FF");
    rect(510, 30, 150, 350 );
}