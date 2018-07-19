
var h;

function setup() {
  createCanvas(600,600);
  
  h = new healt(width/2,height/2,100);  
  h.show();
}
function keyTyped(){
  if(key == 'r'){
    h.reset();
    background(255);
    h.show();
  }
  if(key == 'a'){
    h.gotHit(20);
    background(255);
    h.show();
  }
  if(key == 'h'){
    h.heal(10);
    background(255);
    h.show();
  }
  if(key == 'g'){
    h.addHealt(10);
    background(255);
    h.show();
  }
}
function draw() {
    background(255);
  h.x = mouseX;
  h.y = mouseY-20;
  h.show();
  noStroke();
  fill(0,0,255);
  rect(mouseX,mouseY+5,100,100);
}


