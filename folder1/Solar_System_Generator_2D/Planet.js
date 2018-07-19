
function Planet(r,d,o){
  this.radius = r;
  this.distance = d;
  this.angle = random(TWO_PI);
  this.planets = [];
  this.orbitspeed = o;
  
  this.show = function(){
    push();
    translate(this.distance, 0);
    fill(255);
    noStroke();
    ellipse(0,0,this.radius*2,this.radius*2);
    if(this.planets){
      for( i = 0; i < this.planets.length; i++){
        this.planets[i].show();
      }
    }
    pop();
  }
  this.orbit = function(){
    this.angle += this.orbitspeed;
    if(this.planets){
      for( i = 0; i < this.planets.length; i++){
        this.planets[i].orbit();
      }
    }
  }
  this.spawnMoons = function(total, level){
    for( i = 0; i < total; i++){
      var r = this.radius/(level*1.2);
      var d = random(75,150);
      var o = random(-0.05, 0.05);
      this.planets.push( new Planet(r, d/level, o));
      if(level < 3){
        var num = int(random(0,3));
        this.planets[i].spawnMoons(num, level+1)
      }
    }
  }
  
  
}






