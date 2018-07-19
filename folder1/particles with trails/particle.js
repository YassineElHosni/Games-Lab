

function particle(x,y){
  this.x = x;
  this.y = y;
  this.history = [];
  
  this.update = function(){
    this.x += random(-10,10);
    this.y += random(-10,10);
    
    var vector = createVector(this.x,this.y);
    this.history.push(vector);
    
    if(this.history.length > 25){
      this.history.splice(0,1);
    }
  }
  this.show = function(){
    stroke(0);
    fill(255);
    ellipse(this.x,this.y,10,10);
    
    for(var i = 0; i < this.history.length; i++){
      var pos = this.history[i];
      fill(random(255));
      ellipse(pos.x, pos.y, i, i);
    }
  }
}


