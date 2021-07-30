var bg,bg2,boy,boyImg,m1Img;
var score=0;
var mushroomImage;
function preload() {
 
  
  bgImg= loadImage("images/background.jpg");

boyImg=loadAnimation("images/b1.png","images/b2.png","images/b3.png","images/b4.png");
bg2=loadImage("images/background2.jpg");
mushroomImage=loadImage("images/m1.png");

  
  
}

function setup() {
  createCanvas(1000,500);
  bg=createSprite(700,280);
  bg.scale=2.0
  bg.velocityX=-3
  bg.x=bg.width/2
  bg.addImage("bg",bgImg)
  boy=createSprite(200,340,50,50);
  boy.addAnimation("boy",boyImg)
 
  
  
  
  
  
  
}

function draw() {
  background(0);

  text("Score: " + score, 450, 50);
  if(bg.x<0){
   bg.x=bg.width/2;
  }

  spawnMushroom();
  //spawnObstacles();
  
  

  drawSprites()
}
  
function spawnMushroom(){
  if (frameCount % 60 === 0) {
    var mushroom = createSprite(1000,430,40,10);
   // mushroom.y = Math.round(random(0,200));
    mushroom.addImage(mushroomImage);
    mushroom.scale = 0.2;
    mushroom.velocityX = -3;

    mushroom.lifetime = 200;
    
    
    mushroom.depth = boyImg.depth;
    mushroom.depth = boyImg.depth + 1;
    
    
  
}
}