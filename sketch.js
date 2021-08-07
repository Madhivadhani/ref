var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100,200,50,80);
  movingRect = createSprite(200,200,80,50);
  fixedRect.shapeColor ="green"
  movingRect.shapeColor = "green"
}

function draw() {
  background("black");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x)
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
    fixedRect.shapeColor ="red"
    movingRect.shapeColor ="red"


  }
  else{
    fixedRect.shapeColor ="green"
    movingRect.shapeColor ="green"

  }


  drawSprites();


}