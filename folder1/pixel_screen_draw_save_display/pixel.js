
function pixel(x,y){
  this.x = x;
  this.y = y;
  this.size = 10;
  this.col = color(random(5,40));
  this.selected = false;
  
  this.show = function(s){
    this.size = s;
    fill(this.col);
    rect(this.x*this.size,this.y*this.size,this.size,this.size);
  }
  this.values = function(){
    return createVector(this.x*this.size,this.y*this.size);
  }
  this.select = function(){
    if(this.selected){
      this.selected = false;
      this.col = random(0,50);
    }
    else{
      this.selected = true;
      this.col = color(255);
    }
  }
  this.reset = function(){
    this.selected = false;
    this.col =random(0,50);
  }
}