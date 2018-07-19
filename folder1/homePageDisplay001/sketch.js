function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,240);
  rectMode(CENTER);
  display();
  
  
}
function display(){
  noStroke();
  var e = 255;
  fill(0,255,0,e-100);
  var x = windowWidth/2;
  var y = windowHeight/2;
  var h = 150;
  var w = 250;
  rect(x-125,y-75,w,h);
  
  fill(255,0,0,e-100);
  rect(x+125,y+75,w,h);
  
  fill(0,0,255,e);
  rect(x,y,w,h);
}
function windowResized(){
  setup();
}
function draw() {
  
}