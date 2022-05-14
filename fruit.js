img = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() 
{
    img = loadImage('https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F11%2F03%2F61129_Prep_Smoothies_030_preview-2000.jpg&q=60');
}

function draw() 
{
    image(img, 0, 0, 640, 420);
    fill("#6A0DAD");
    text("Fruits", 45, 75);
    noFill();
    stroke("#6A0DAD");
    rect(30, 60, 450, 350 );
}