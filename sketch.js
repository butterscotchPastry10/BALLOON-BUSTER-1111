var bow , arrow,  scene;
var bowImage, arrowImage, greenBalloonImage, redBalloonImage, pinkBalloonImage ,blueBalloonImage, backgroundImage;

var score=0;

function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  greenBalloon = loadImage("green_balloon0.png");
  pinkBalloon = loadImage("pink_balloon0.png");
  blueBalloon = loadImage("blue_balloon0.png");
  redBalloon  = loadImage("red_balloon0.png");
}



function setup() {
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5;
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);
 text("Score: "+ score, 300,50);

  // moving ground
    scene.velocityX = -3 

    if (scene.x < 10){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
   
   var select_balloon = Math.round(random(1,4))
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      red_Balloon();
    } else if (select_balloon == 2) {
      green_Balloon();
    } else if (select_balloon == 3) {
      blue_Balloon();
    } else {
      pink_Balloon();
    }
  }  
    
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function blue_Balloon() {
  //write code here to draw the balloon
  blue = createSprite(150,200,20,20);
  blue.addImage(blueBalloon);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function red_Balloon() {
  var red = createSprite(0,Math.round(random(20,370)),10,10);
  red.addImage(redBalloon);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function green_Balloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(greenBalloon);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pink_Balloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkBalloon);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
}
