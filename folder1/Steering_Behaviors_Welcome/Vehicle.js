

function Vehicle(x, y){
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 8;
  this.maxspeed = 10;
  this.maxforce = 1;
}
Vehicle.prototype.behviors = function(){
  var arrive = this.arrive(this.target);
  var mouse = createVector(mouseX, mouseY);
  var flee = this.flee(mouse);
  
  arrive.mult(1);
  flee.mult(5);
  
  this.applyForce(arrive);
  this.applyForce(flee);
}
Vehicle.prototype.applyForce = function(f){
  this.acc.add(f);
}

Vehicle.prototype.update = function(){
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}
Vehicle.prototype.arrive = function(target){
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if(d < 100){
      speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
}
Vehicle.prototype.flee = function(target){
    if(target.x == 0 && target.y == 0){target.x = -50; target.y = -50;}
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if(d < 50){
      
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
    }else{
      return createVector(0, 0);
    }
}


Vehicle.prototype.show = function(){//68,69,193
  stroke(random(100,200),random(100,250),random(60,250));//31,255,236//31,198,232//87,182,255//31,94,232//35,48,255
  strokeWeight(this.r);
  point(this.pos.x, this.pos.y);
}


