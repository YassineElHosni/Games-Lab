

var bubbles = [];
var targets = [];

function setup() {
  createCanvas(600,400);
  background(70);
  
  bubbles.push(new bubble(random(width),random(height)));
  
  targets.push(new target(random(width),random(height)));
  
  
}
function keyPressed(){
  if(key == 'c'){
    //create target
  }
}
function mousePressed(){
  //move to target
  moving();
}
function moving(){
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].move(new createVector(10,20));
  }
  setTimeout(moving,1000);
}
function draw() {
  background(70);
  
  for(var i = 0; i < bubbles.length; i++){
   // bubbles[i].update();
    bubbles[i].show();
  }
  
  for(var i = 0; i < targets.length; i++){
    targets[i].update();
    targets[i].show();
  }
}




