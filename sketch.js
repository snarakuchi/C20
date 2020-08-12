var movingRect,fixedRect;

function setup() {
  createCanvas(1300,500);
  fixedRect = createSprite(200,200,100,100);
  movingRect = createSprite(1200,400,100,100);
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "green";
}

function draw() {
  background("black");
  
  //Movement
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //Colliding
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}