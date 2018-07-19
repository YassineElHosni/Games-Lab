var bubbles = [];

function setup() {
  createCanvas(400,500);
  background(51);
  
  create();
  display();
}
function create(){
  var solos = movies.solos;
  for(var i = 0;i < solos.length;i++){
    bubbles.push(new bubble(random(width),random(height),solos[i].year));
  }
}
function display(){
  for(var i = 0; i < 1; i++){
    bubbles[i].update();
    bubbles[i].move(width/2,height/2);
    bubbles[i].colide();
    bubbles[i].show();
  }
}
function mousePressed(){
  activateTarget();
}
function keyPressed(){
  if(key==' '){
    for(var i = 0; i< 1;i++){
      bubbles[i].stop();
    }
  }
}
function activateTarget(){
  
}
function draw() {
  background(51);
  display();
  
}