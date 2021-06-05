var tower, towerImage, ghost, ghostImage;
var door, doorImage;
var climber, climberImage;
var invisibleS;

var gameState= "Play";

var doorGroups, climberGroups, invisibleSgroups;


function preload(){
  towerImage= loadImage("tower.png");
  ghostImage= loadImage("ghost-standing.png");
  doorImage= loadImage("door.png");
  climberImage= loadImage("climber.png");
}

function setup(){
  createCanvas(400, 400)
  tower= createSprite(200,200, 20,20);
  tower.addImage(towerImage);
  tower.scale=0.5;
  tower.velocityY=2;
  
  ghost= createSprite(200,200,20,20);
  ghost.addImage(ghostImage);
  ghost.scale=0.3;
  
  doorGroups=createGroup()
  climberGroups=createGroup()
  invisibleSgroups=createGroup()
  
}


function draw(){
  
  if(gameState==="Play"){
  if(tower.y >300){
    tower.y=200
  }
  
  if(keyDown("space")){
    
    ghost.velocityY=-2;
    
  }
  
  ghost.velocityY=ghost.velocityY+0.5;
  
  if(keyDown("right")){
    ghost.x=ghost.x+3;
  }
  
  if(keyDown("left")){
    ghost.x=ghost.x-3;
  }
  
  spawnDoor()
  
  if(ghost.isTouching(invisibleSgroups)|| ghost.y>400)
  {
    ghost.destroy()
    gameState="end";
  }
    if(ghost.isTouching(climberGroups)){
      ghost.velocityY=0;
    }
  drawSprites()
}
  if(gameState==="end"){
    background("black");
    textSize(20);
    fill("yellow");
    text("Game Over",150,200);
  }
}

function spawnDoor(){
  
  if(frameCount%150==0){
  door= createSprite(Math.round(random(120,280)),10);
  door.addImage(doorImage);
  door.velocityY=2;
  door.scale=0.5;
  door.lifetime=200;
    
  climber= createSprite(door.x,35);
  climber.addImage(climberImage);
  climber.velocityY=2;
  climber.scale=0.5;
  climber.lifetime=200;
    
  invisibleS= createSprite(door.x, 40, 40,2);
  invisibleS.velocityY=2;
  invisibleS.lifetime=200;
    
  doorGroups.add(door)
  climberGroups.add(climber)
  invisibleSgroups.add(invisibleS)
  }
  
  
}








