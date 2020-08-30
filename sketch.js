
var score;
var banana, banana_Image,bananasGroup;
var obstacle,obstaclesGroup;
var ground,Invisible_ground;


function preload(){
  
  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png", "Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png" ,"Monkey_10.png")
 
  banana_Image = loadImage("banana.png");
stone_Image =  loadImage("stone-1.png")
}




function setup() {
  createCanvas(1200, 400);
 
 
   ground = createSprite(400,200,1200,400);
  ground.addImage("ground",backImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  
  Invisible_ground = createSprite(300,390,600,10);
  
   monkey = createSprite(50,390,20,50);

   bananasGroup = new Group();
  obstaclesGroup = new Group();
  monkey.addAnimation("running",player_running)
  monkey.scale = 0.1;
  score = 0;
}



function draw() {
  background(180);
  
   if(keyDown("space")) {
    monkey.velocityY = -12;
  } 
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(Invisible_ground);
  
   if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(obstaclesGroup.isTouching(monkey)){
  monkey.scale =0.1;
    obstaclesGroup.destroyEach();
  }
  
  
 
  switch(score){
    
    case 10: monkey.scale = 0.12
      break;
    case 20: monkey.scale = 0.13
      break;
      case 30: monkey.scale = 0.14
      break;
     case 40: monkey.scale = 0.15
      break;
      default: break;
  }
  
  
  Invisible_ground.visible = false;
  spawnbananas();  
  spawnobstacles();
  
  
   text("score: "+ score,500,50);
  
  drawSprites();
  
  
}

function spawnbananas() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(150,250));
    banana.addImage(banana_Image);
    banana.scale = 0.05;
    banana.velocityX = -7;
  
     //assign lifetime to the variable
    banana.lifetime = 200;
    

    
    
    //add each cloud to the group
    bananasGroup.add(banana);
  }
  }

function spawnobstacles (){
if (frameCount % 150 === 0) {
    var obstacle = createSprite(600,350,40,10);
    obstacle.y = 370
    obstacle.addImage(stone_Image);
    obstacle.scale = 0.3;
    obstacle.velocityX = -3;
  
     //assign lifetime to the variable
    obstacle.lifetime = 200;
  
  obstaclesGroup.add(obstacle);
}
}
