

function nmb(x,y,s,op){
  this.x = x;
  this.y = y;
  this.r = 8;
  this.op = op;
  this.speed = 1;
  this.size = s;
  this.timeout = round (random (2,20));
  this.col = color(0,random (50),random (150,255),random(this.op,this.op*2));//0,random(150,255),random(50),random(this.op,this.op*2));
  this.bool = int(random(0,2));
  this.history = [];
  this.maxSymble = random (this.size/4,windowHeight/this.size);
  this.y += this.maxSymble*random (0,100);
  this.value ='';
  this.setRandomSymble = function (){
    fill (255);
   // text (this.value,10,10);
    this.value = String.fromCharCode (0x30A0 +round (random (92)));
  }
  this.update = function(){
    this.setRandomSymble ();
    this.timeout = round (random (2,20));
    this.speed=this.size;//13 if default size
    this.y+=this.speed;
    this.col = color(0,random (50),random (150,255),random(this.op,this.op*2));//0,random(150,255),random(50),random(this.op,this.op*2));
    this.bool = int(random(0,2));
    this.history.push(createVector(this.x,this.y,createVector(this.value,this.col,this.timeout)));
    
    if(this.history.length>this.maxSymble){
      this.history.splice(0,1);
    }
  }
  this.show = function(){
    for(var i = 0; i < this.history.length; i++){
    fill(this.history[i].z.y);
    //if (i==0){fill (255,0,0);}
    if (i==this.history.length-1){fill (178,194,255,this.op*2);}
    if (frameCount % this.history [i].z.z ==0){
       this.history [i].z.x=String.fromCharCode (0x30A0+round (random(92)));
     }
    text(this.history[i].z.x,this.history[i].x,this.history[i].y);
    }
  }
  this.colide = function(){
    // if(this.x >= width)this.x -= width;
    // else if(this.x <= 0)this.x += width;
    if(this.y >= height){
      this.y -= height;
     // this.x = random(width);
      this.speed = 0.5;
     // background(20);
    }
    else if(this.y <= 0){
      this.y += height;
    }
  }
}