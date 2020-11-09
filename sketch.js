var fixedRect, movingRect;
var game1,game2,game3,game4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  game1 = createSprite(100,100,40,50)
  game1.shapeColor = "blue"
  game2 = createSprite(200,100,40,50)
  game2.shapeColor = "blue"
  game3 = createSprite(300,100,40,50)
  game3.shapeColor = "blue"
  game4 = createSprite(400,100,40,50)
  game4.shapeColor = "blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
     
  if (isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
  }

  if (isTouching(game1,movingRect)){
    movingRect.shapeColor = "red";
    game1.shapeColor = "red";

  }
  else {
    movingRect.shapeColor = "green";
    game1.shapeColor = "blue"   
  }

  
  drawSprites();
}

// Boolean value
// 1/0, true/false, on/off
