
var nmbs = [];
function setup() {
  createCanvas(600,400);
  background(20);
  
}
function mousePressed(){
  nmbs.push(new nmb(mouseX,mouseY));
}
function draw() {
  background(20);
  
  for(var i = 0; i < nmbs.length; i++){
    nmbs[i].update();
    nmbs[i].colide();
    nmbs[i].show();
  }
}
function keyPressed(){
  if(key==keyCode('s')){
    for(var i = 0; i < 10; i++){
      nmbs.push(new nmb(random(100,width-100),random(10)));
    }
  }
}