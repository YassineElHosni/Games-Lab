

function bubble(x,y){
  this.x = x;
  this.y = y;
  this.r = 15;
  this.speed = 5;
  this.update = function(){
    this.x += this.speed;//+random(-1,1);
    this.y += this.speed;//+random(-1,1);
  }
  this.show = function(){
    fill(100,0,50,random(25,100));
    noStroke();
    ellipse(this.x,this.y,this.r*2,this.r*2);
  }
  this.move = function(t){
    var c = new createVector(this.x,this.y);
    if(t.x>c.x){
      c.x++;
    }
    if(t.x<c.x){
      c.x--;
    } if(t.y>c.y){
      c.y++;
    }
    if(t.y<c.y){
      c.y--;
    }
    this.x = c.x;
    this.y = c.y;
  }
  this.stop = function(){
    this.speed = 0;
  }
}




