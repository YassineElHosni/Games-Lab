

function bubble(x,y,years){
  this.x = x;
  this.y = y;
  this.r = 8;
  this.years = years;
  this.col = color(random(255),0,random(50,150));
  this.txtcol = color(0,random(150,255),random(50));
  this.speed = 0.01;
  this.target = createVector(0,0);
  
  this.update = function(){
    this.x += this.target.x;
    this.y += this.target.y;
    this.target.x = constrain(this.target.x,0,1);
    this.target.y = constrain(this.target.y,0,1);
  }
  this.show = function(){
    noStroke();
    fill(this.col);
    ellipse(this.x,this.y,this.r*2,this.r*2);
    fill(this.txtcol);
    
    text(this.years,this.x,this.y);
  }
  this.colide = function(){
    if(this.x >= width)this.x -= width;
    else if(this.x <= 0)this.x += width;
    if(this.y >= height)this.y -= height;
    else if(this.y <= 0)this.y += height;
  }
  this.stop = function(){
    this.target.x = 0;
    this.target.y = 0;
  }
  this.move = function(x,y){
    var d = dist(x,y,this.x,this.y);
    // if(d>this.r){
      this.target.x+=(this.target.x<x)?-this.speed:-this.speed;
      this.target.y+=(this.target.y<y)?-this.speed:-this.speed;
    // }
  }
  
}



