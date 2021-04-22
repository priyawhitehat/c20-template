var mrect,frect;


function setup()
 {
  createCanvas(800,800);
  frect=createSprite(400, 200, 50, 50);
  mrect=createSprite(600,200,70,70);
}

function draw()
 {
  background(255,255,255);  
  mrect.x=mouseX;
  mrect.y=mouseY;
  console.log(mrect.x-frect.x);
  
  if(mrect.x-frect.x<=(mrect.width+frect.width)/2&& frect.x-mrect.x<=(mrect.width+frect.width)/2
  &&mrect.y-frect.y<=(mrect.height+frect.height)/2&& frect.y-mrect.y<=(mrect.height+frect.height)/2)
  {
    frect.shapeColor="red";
    mrect.shapeColor="red";
  }
 else
  {
    frect.shapeColor="green";
    mrect.shapeColor="green";
  }
  drawSprites();
}