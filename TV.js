img = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() 
{
    img = loadImage('https://www.cnet.com/a/img/resize/89439acb1ddd08da5ec840130313eb25a9509302/2021/04/14/58e9b86b-3c3a-4ff9-ac4d-1d1ab7bef323/002-lg-g1-oled-tv.jpg?auto=webp&fit=crop&height=236&width=420');
}

function draw() 
{
    image(img, 0, 0, 640, 420);
    fill("#FFFF00");
    text("TV", 45, 75);
    noFill();
    stroke("#FFFF00");
    rect(30, 60, 450, 350 );
}