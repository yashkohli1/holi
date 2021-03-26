var holi,lohri
function setup() {
  createCanvas(800,400);
 holi=createSprite(400,100,19,19)
 lohri= createSprite(400, 200, 50, 50);
 holi.debug=true
 lohri.debug=true
}

function draw() {
  background(255,255,255); 
  holi.x=mouseX
  holi.y=mouseY
  if((holi.x-lohri.x<=holi.width/2+lohri.width/2&&lohri.x-holi.x<=holi.width/2+lohri.width/2) &&
  (holi.y-lohri.y<=holi.height/2+lohri.height/2&&lohri.y-holi.y<=holi.height/2+lohri.height/2))
  {
    holi.shapeColor="red"
    lohri.shapeColor="gold"
  }
else{
  holi.shapeColor="white"
    lohri.shapeColor="black" 
}
  drawSprites();
}