var Fixedrect,MovingRect

function setup() {
  createCanvas(1200,400);
  Fixedrect = createSprite(400, 200, 50, 50);
  MovingRect = createSprite(200,200,20,70);
  MovingRect.debug = true;
  Fixedrect.debug = true;
  Fixedrect.shapeColor = "green";
  MovingRect.shapeColor = "green";
}

function draw() {
  background(0);  
  MovingRect.x = World.mouseX;
  MovingRect.y = World.mouseY;
  console.log(MovingRect.x - Fixedrect.x);
  if(MovingRect.x - Fixedrect.x < Fixedrect.width / 2 + MovingRect.width /2 &&
    Fixedrect.x - MovingRect.x < Fixedrect.width / 2 + MovingRect.width /2 &&
    MovingRect.y - Fixedrect.y < Fixedrect.height / 2 + MovingRect.height /2 &&
    Fixedrect.y - MovingRect.y < Fixedrect.height / 2 + MovingRect.height /2)
  {
    MovingRect.shapeColor = "red";
    Fixedrect.shapeColor = "red";
  }else
  {
    Fixedrect.shapeColor = "green";
  MovingRect.shapeColor = "green";
  }
  drawSprites();
}
