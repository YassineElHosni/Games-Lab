
var s;
function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);
 // s = new symble(width/2,height/2,1);
  textSize(40);
  stm = new Steam();
  stm.generate();
}

function draw() {
  
  //background(0);
  //s.render();
}

function symble(x,y,speed,first){
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;
  this.first = first;
  this.timeout = round(random(2,20));
  this.setRandomSymble = function(){
    console.log(frameCount+" "+this.timeout);
    if(this.timeout % frameCount== 0){
      this.value = String.fromCharCode(
        0x30A0  +round(random(96))  
    );
      
    }
  }
  this.render = function(){
    this.setRandomSymble();
    fill(0,255,70);
    text(this.value,this.x,this.y);
    this.rain();
  }
  this.rain = function(){
    this.y=(this.y>=height)? 0 : this.y+this.speed;
  }
}
function Steam(speed,size){
  this.totalSymbles = random(5,15);
  this.speed = speed;
  this.size = size;
  this.symbles = [];
  this.generate = function(){
    for(var i = 0; i < this.totalSymbles; i++){
      this.symbles.push(new symble(width/2,i+this.size,this.speed,(i==0)?true:false));
    }
    for(var i = 0; i < this.symbles; i++){
      symbles[i].render();
    }
  }
}



