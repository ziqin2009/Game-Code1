var box ;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{
  background(30);
 if (keyIsDown(RIGHT_ARROW)) {
   box.position.x= box.position.x+3;
 }
 
  drawSprites();
}




