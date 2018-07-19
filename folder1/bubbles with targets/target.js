

function target(x,y){
  this.x = x;
  this.y = y;
  this.r = 25;
  this.col = color(0,200,0,100);
  this.update = function(){
      for(var i = 0; i < bubbles.length; i++){
       var d = dist(this.x,this.y,bubbles[i].x,bubbles[i].y);
       if(d <= this.r+bubbles[i].r){
         //bubbles[i].stop();
         this.col = color(200,0,100);
       }if(d > this.r+bubbles[i].r){
         this.col = color(0,200,100);
       }
  }
  }
  this.show = function(){
   fill(this.col);
   noStroke();
   ellipse(this.x,this.y,this.r*2,this.r*2);
  }
}




