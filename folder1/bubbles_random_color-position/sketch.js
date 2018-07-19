
var bubbles = [];

function setup() {
  createCanvas(400,300);
  background(100);
  
}

function draw() {
    background(100);
  for(var i = 0; i < bubbles.length;i++){
    bubbles[i].move();
    bubbles[i].display();
  }
  for(var i = bubbles.length-1; i >= 0; i--){
    if(bubbles[i].lifeSpane <= 0){
      bubbles.splice(i,1);
    }
  }
  
}

function mouseDragged(){
    bubbles.push(new bubble(mouseX,mouseY));
}