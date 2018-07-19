
function healt(x,y,current){
  this.name = "yassine";
  this.x = x;
  this.y = y;
  this.max = 100;
  this.current = current;
  
  this.show = function(){
    //this.current = map(this.current,0,this.max,0,100);
    this.current = constrain(this.current,0,this.max);
    
    //this.current = map(this.current,0,this.max,this.max,0);
    
    noStroke();
    fill(255,0,0);
    rect(this.x,this.y,100,10);
    
    fill(0,255,0);
    rect(this.x,this.y,this.current,10);
    fill(100,100,255,100);
    rect(this.x+100,this.y,((this.current>100)?this.current-100:0),10);
    
    stroke(0);
    noFill();
    text(this.current+"/"+this.max,this.x,this.y);
    text(this.name,this.x,this.y+10);
  }
  this.gotHit = function(hit){
    this.current -= hit;
    this.max -= (this.max>=100)?hit:0;
    this.max = constrain(this.max,100,10000);
    this.current = constrain(this.current,0,this.max);
  }
  this.heal = function(points){
    this.current += points;
    this.current = constrain(this.current,0,this.max);
  }
  this.reset = function(){
    this.current = this.max;
    stroke(0);
    noFill();
    text(this.current+"/"+this.max,this.x,this.y);
    
    text(this.name,this.x-100,this.y+5);
  }
  this.addHealt = function(healt){
    this.max += healt; 
    this.reset();
  }
}