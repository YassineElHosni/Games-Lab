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

var nmbs = [];
var s = 20;

function setup() {
  createDivDescription();
  createCanvas(windowWidth,windowHeight);
  background(20);
textSize (s);

display (200,s);
display (30,13);
  
}
function display (op,sz){
  var max = windowWidth/sz;
  for (var i = 0; i <= max; i++){
    nmbs.push(new nmb(i*sz,0,sz,op));
   }
}
function mousePressed(){
  display (30,13);
}
function draw() {
  background(20);
  
  for(var i = 0; i < nmbs.length; i++){
    nmbs[i].update();
    nmbs[i].colide();
    nmbs[i].show();
  }
}
function keyPressed(){
  if(key==keyCode('s')){
    for(var i = 0; i < 10; i++){
      nmbs.push(new nmb(random(100,width-100),random(10),s));
    }
  }
}