
function bubble(x,y){
  this.x = x;
  this.y = y;
  this.r = 15;
  this.history = [];
  
  this.update = function(){
    this.x += random(-5,5);
    this.y += random(-5,5);
    
  }
  this.show = function(){
    noStroke();
    fill(0,100);
    ellipse(this.x,this.y,this.r*2,this.r*2);
  }
}


