

function bubble(x,y){
  this.x = x;
  this.y = y;
  this.lifeSpane = 100;
  //this.col = color(random(255),random(255),random(255),100)
  
  this.move = function(){
    this.x += random(-1,1);
    this.y += random(-1,1);
  }
  this.display = function(){
    noStroke();//stroke(0);
    fill(random(255),random(255),random(255),this.lifeSpane-=5);
    ellipse(this.x,this.y,25,25);
  }
  this.intersect = function(){
    
  }
}