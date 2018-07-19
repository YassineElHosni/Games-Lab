

function nmb(x,y){
  this.x = x;
  this.y = y;
  this.r = 8;
  this.speed = 1;
  this.col = color(0,random(150,255),random(50),random(100,200));
  this.bool =int(random(0,2)); //String.fromCharCode(0x30A0 + round(random(96)));
  this.history = [];
  this.update = function(){
    this.speed=13;
    this.y+=this.speed;
    this.col = color(0,random(150,255),random(50),random(100,200));
    this.bool =int(random(0,2));// String.fromCharCode(0x30A0 + round(random(96)));
    this.history.push(createVector(this.x,this.y,createVector(this.bool,this.col)));
    
    if(this.history.length>50){
      this.history.splice(0,1);
    }
  }
  this.show = function(){
    for(var i = 0; i < this.history.length; i++){
    fill(this.history[i].z.y);
    text(this.history[i].z.x,this.history[i].x,this.history[i].y);
    }
  }
  this.colide = function(){
    // if(this.x >= width)this.x -= width;
    // else if(this.x <= 0)this.x += width;
    if(this.y >= height){
      this.y -= height;
      this.x = random(width);
      this.speed = 0.5;
     // background(20);
    }
    else if(this.y <= 0){
      this.y += height;
    }
  }
}