
import java.util.*;

var bubbles = [];

function setup() {
  createCanvas(600,400);
  background(51);
}
function mousePressed(){
  bubbles.push(new bubble(mouseX,mouseY));
}
function draw() {
  background(51);
  
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].update();
    bubbles[i].show();
  }
}