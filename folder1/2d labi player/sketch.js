var player;
var points = [];
function setup() {
  noStroke();
  createCanvas(100,100);
  background(51);
  createItems(4,2);
  createPlayer();
}

function createItems(b,p){
  // for(var i=1;i<=b;i++){
    
  //   if(!containsItem())
  // }
  for(var j=0;j<p;j++){
    var px=round(random(1,10))
    var py=round(random(1,10))
    if(!contain(px,py) && (player.x==px && player.y==py)){
      points.push(createVector(px,py));
    }
  }
}
function contain(x,y){
  var isFree = true;
  for(var i = 0;i < points.length;i++){
    if(points[i].x==x && points[i].y==y){
      isFree = false;
    }
  }
  return isFree;
}
function createPlayer(){
  player = createVector(0,0);
}
function move(x,y){
  player.x+=x;
  player.y+=y;
}
function KeyPressed(){
  if(keyCode=="e"){
    move(0,1);
  }else if(keyCode=="d"){
    move(0,-1);
  }
  if(key=="s"){
    move(-1,0);
  }else if(key=="f"){
    move(1,0);
  }
}
function displayItems(){
  for(var j=0;j<points.length;j++){
      fill(255);
      rect(points[j*10].x,points[j*10].y,10,10);
      fill(0);
  }
}
function displayPlayer(){
      fill(51,255,51);
      rect(player.x,player.y,10,10);
      fill(0);
}
function draw() {
  background(51);
  displayItems();
  displayPlayer();
}