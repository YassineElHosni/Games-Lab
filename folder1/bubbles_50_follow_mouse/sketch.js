
var bubbles = [];

function setup() {
  createCanvas(400,300);
  background(0);
}

function draw() {
  background(0);
  
  //create object
  
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
  }
}

function mousePressed(){
  //bubbles.push(new bubble());
  background(0);
}
function mouseDragged(){
  bubbles.push(new bubble());
  if(bubbles.length > 70){
    bubbles.splice(0,1);
  }
}

function bubble(){
  this.x = mouseX;
  this.y = mouseY;
  this.move = function(){
    this.x += random(-1,1);
    this.y += random(-1,1);
  }
  this.display = function(){
    noStroke();
    fill(random(0,255),random(0,255),random(0,255),100);
    ellipse(this.x,this.y,25,25);
  }
  
}




