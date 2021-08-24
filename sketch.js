var snow1,snow2
var bg


function preload(){
snow1 =loadImage("snow4.webp")
snow2 =loadImage("snow5.webp")
bg =loadImage("snow2.jpg")


}

function setup() {
  createCanvas(800,400);

  createSprite(400, 200, 50, 50);

}

function draw() {

  background(bg);  



  createSnowfall1();
  createSnowfall2();
  drawSprites();
}

function createSnowfall1(){

if (frameCount % 10 === 0){
snowfall1 = createSprite(random(0,800),0,50,50)
snowfall1.velocityX = -2
snowfall1.velocityY = 4
snowfall1.addImage(snow1)
snowfall1.scale = 0.1
}


}
function createSnowfall2(){

  if (frameCount % 10 === 0){
  snowfall2 = createSprite(random(0,1500),0,50,50)
  snowfall2.velocityX = -2
  snowfall2.velocityY = 4
  snowfall2.addImage(snow2)
  snowfall2.scale = 0.1
  }
}  


