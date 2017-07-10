

function bubble(x,y){
  this.x = x;
  this.y = y;
  this.r = 25;
  this.col = color(255)
  this.goTo = 0;
  
  this.move = function(){
    this.x += random(-1,1)+ random(-this.goTo,this.goTo);
    this.y += random(-1,1)+ random(-this.goTo,this.goTo);
  }
  this.display = function(){
    noStroke();//stroke(0);
    fill(this.col);
    ellipse(this.x,this.y,this.r * 2,this.r * 2);
  }
  this.intersect = function(other){
    var d = dist(this.x,this.y,other.x,other.y);
    if(d < this.r + other.r){
      return true;
    } else return false;
  }
}