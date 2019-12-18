var currentGame;
function createDivDescription(){
  var divDescription = createDiv();
  divDescription.html("<h1 id='gameTitle'>"+currentGame.title+"</h1>"+
                "<div id='gameDescription'>"+currentGame.description+"</div>"+
                "<div id='gameType'>"+currentGame.type+"</div>"+
                "<div id='gameCopyright'>"+currentGame.copyright+"</div>");
}
function preload(){
  currentGame = loadJSON("manifest.json");
}


var p,v,speed=1,eSize=100;
function setup() {
  createDivDescription();
  
  createCanvas(500,400)
  p = createVector(0,0);
  s = createVector(speed,speed);
  v = createVector(s.x,s.y);
}

function draw() {
  
  background(51);
  fill(100,90,30);
  ellipse(p.x,p.y,eSize,eSize);
  
  p.x+=v.x;
  p.y+=v.y;
  
  if(p.x-eSize>=width)v.x=-s.x;else
  if(p.x<=0)v.x=s.x;
  
  if(p.y-eSize>=height)v.y=-s.y;else
  if(p.y<=0)v.y=s.y;
  
  
  
  
}





