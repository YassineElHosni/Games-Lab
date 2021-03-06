
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

var bubbles = [];

function setup() {
  createDivDescription();
  
  createCanvas(800, 500);
  background(100);

  for (var i = 0; i < 10; i++) {
    bubbles.push(new bubble(random(150, width - 150), random(100, height - 100)));
  }

}

function draw() {
  background(100);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();

    //test loop
    for (var j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersect(bubbles[j])) {
        bubbles[i].col = color(random(255), random(255), random(255), random(50,200));

        //colide
        if (i != j && bubbles[i].intersect(bubbles[j])) {
          if(bubbles[i].goTo != 0){
            bubbles[j].goTo += 5;
            bubbles[j].col = color(255,0,0);
          }
          if (bubbles[i].x < bubbles[j].x) {
            bubbles[i].x--;
            bubbles[j].x++;
          } else if (bubbles[i].x >= bubbles[j].x) {
            bubbles[i].x++;
            bubbles[j].x--;
          }

          if (bubbles[i].y < bubbles[j].y) {
            bubbles[i].y--;
            bubbles[j].y++;
          } else if (bubbles[i].y >= bubbles[j].y) {
            bubbles[i].y++;
            bubbles[j].y--;
          }

        }
        //limit to 50 bubbles
        if (bubbles.length > 10) {
          bubbles.splice(0, 1);
        }
        //end of the test loop.
      }
    }
  }

}

function mousePressed() {
  for(var i = 0; i < bubbles.length; i++){
    var d = dist(bubbles[i].x,bubbles[i].y,mouseX,mouseY);
    if(bubbles[i].r > d){
      bubbles[i].goTo += 5;
      bubbles[i].col = color(255,0,0);
    }
  }
}

function keyPressed(){
  background(0);
}



