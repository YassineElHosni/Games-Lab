var particles = [];

function setup() {
  createCanvas(600,600);
  background(51);
}

function mousePressed(){
  particles.push(new particle(mouseX,mouseY));
}

function draw() {
  background(51);
  for(var i = 0; i < particles.length; i++){
    particles[i].update();
    particles[i].show();
  }
  //line(frameCount,0,frameCount,height);
}




