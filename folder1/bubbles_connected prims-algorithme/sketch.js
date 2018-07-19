
var vectices = [];

function setup() {
  createCanvas(640,360);
}

function mousePressed(){
  var v = createVector(mouseX,mouseY);
  vectices.push(v);
}

function draw() {
  background(51);
  
  var reached = [];
  var unreached = [];
  
  for(var i = 0; i < vectices.length; i++){
    unreached.push(vectices[i]);
  }
  
  reached.push(unreached[0]);
  unreached.splice(0,1);
  
  while(unreached.length > 0){
    var record = 100000;
    var rIndex;
    var uIndex;
    
    for(var i = 0; i < reached.length; i++){
      for(var j = 0; j < unreached.length; j++){
        var v1 = reached[i];
        var v2 = unreached[j];
        var d = dist(v1.x,v1.y,v2.x,v2.y);
        if(d < record){
          record = d;
          rIndex = i;
          uIndex = j;
        }
      }
    }
    
    line(reached[rIndex].x,reached[rIndex].y,unreached[uIndex].x,unreached[uIndex].y);
    
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex,1);
    
  }
  
  for(var i = 0; i < vectices.length; i++){
    fill(255);
    stroke(255);
    ellipse(vectices[i].x,vectices[i].y,16,16);
  }
}




