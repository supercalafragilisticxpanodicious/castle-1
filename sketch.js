
var a1,a2,a3,a4,c1,c2


function setup() {
  createCanvas(1500,1500);
  a1=createSprite(600, 400, 60, 400);
  a2=createSprite(400, 500, 60, 200);
  a3=createSprite(300, 400, 60, 400);
  a4=createSprite(500, 500, 60, 200);
  c1=createSprite(300,200,50,90);
  c2=createSprite(600,200,50,90);

}

function draw() {
  background(0); 
   


  drawSprites();
}