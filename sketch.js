var hero,killer1,killer2,killer3,boss;
var dragon;

function preload(){
  heroImage=loadImage("hero.png")
  backgroundImage=loadImage("backyard.jpg")
  dragonImage=loadImage("change2ok.png")
  killerImage=loadImage("samurai999.png")
  killer2Image=loadImage("samurai2888.png")
  killer3Image=loadImage("samurai369.png")
  killerBossImage=loadImage("samuraiBoss.png")
  }
function setup() {
  createCanvas(1200,600);
  background1=createSprite(0,0,200,100);
background1.scale=2
background1.addImage(backgroundImage)
background1.x=background1.width/2
background1.velocityX=-6
hero=createSprite(150,300,100,200)
hero.addImage(heroImage)

}



function draw() {
  background(0);  
  if(background1.x<0){
    background1.x=background1.width/2
  }
if (keyWentDown("c")){
  hero.addImage(dragonImage)
}
if (keyWentUp("c")){
  hero.addImage(heroImage)
}
if(keyDown("up")){
hero.y=hero.y-6
}
if(keyDown("down")){
  hero.y=hero.y+6
  }
if(keyDown("right")){
 hero.x=hero.x+6
 }
if(keyDown("left")){
hero.x=hero.x-6
 }
spawnSamurai();
  drawSprites();
}
function spawnSamurai(){
if(frameCount%100==0){
killer=createSprite(1100,random(50,550),100,200)
var rand=Math.round(random(1,3))
switch(rand){
  case 1:killer.addImage(killerImage)
  killer.scale=0.5
  break;
  case 2:killer.addImage(killer2Image)
  killer.scale=0.3
  break;
  case 3:killer.addImage(killer3Image)
  killer.scale=0.2
  break;
}
killer.velocityX=-6

}
}