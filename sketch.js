var jaxson, jaxson_running;
var road, roadImage;

function preload(){
  jaxson_running = loadAnimation("Runner-1.png", "Runner-2.png");
  roadImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  road=createSprite(200,150);
  road.addImage(roadImage);  
  road.velocityY=4;
  road.scale=1.2;  

  jaxson = createSprite(100,200,20,50);
  jaxson.addAnimation("running",jaxson_running);
  jaxson.scale=0.05;

  invisibleBoundary1 = createSprite(365,200,5,400);
  invisibleBoundary1.visible = false;

  invisibleBoundary2 = createSprite(200,125,400,5);
  invisibleBoundary2.visible = false;

  invisibleBoundary3 = createSprite(45,200,5,400);
  invisibleBoundary3.visible = false;

  invisibleBoundary4 = createSprite(200,365,400,5);
  invisibleBoundary4.visible = false;
}

function draw() {
  background(0);
  
  if (road.y > 405){
  road.y = height/2
  }

  if (keyDown("right")){
  jaxson.x=jaxson.x+5;
  }

  if (keyDown("left")){
    jaxson.x=jaxson.x-5;
    }

  if (keyDown("up")){
    jaxson.y=jaxson.y-5;
    }
    
  if (keyDown("down")){
    jaxson.y=jaxson.y+5;
  }  
  
  createEdgeSprites();
  jaxson.collide(invisibleBoundary1);
  jaxson.collide(invisibleBoundary2);
  jaxson.collide(invisibleBoundary3);
  jaxson.collide(invisibleBoundary4);

  drawSprites();
}
