
function item(x,year){
  this.x = x;
  this.y = year;
  this.y = map(this.y,1973,2020,300,0);
  this.r = 25;
  
  this.show = function(){
    stroke(255);
    line(40+this.x,this.y,40+this.x,height);
    fill(170);
    ellipse(40+this.x,this.y,this.r*2,this.r*2);
    fill(0);
    noStroke();
    text(year,25+this.x,this.y)
    console.log(this.y);
  }
}