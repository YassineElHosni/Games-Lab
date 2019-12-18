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

var particles = [];

function setup() {
	createDivDescription();
  createCanvas(600,600);
  background(51);
}

function mousePressed(){
  particles.push(new particle(mouseX,mouseY));
}

function draw() {
  background(51);
  for(var i = 0; i < particles.length; i++){
    particles[i].update();
    particles[i].show();
  }
  //line(frameCount,0,frameCount,height);
}




