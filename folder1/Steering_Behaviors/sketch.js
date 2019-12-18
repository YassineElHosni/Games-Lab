var currentGame;
function createDivDescription(){
  var divDescription = createDiv();
  divDescription.html("<h1 id='gameTitle'>"+currentGame.title+"</h1>"+
                "<div id='gameDescription'>"+currentGame.description+"</div>"+
                "<div id='gameType'>"+currentGame.type+"</div>"+
                "<div id='gameCopyright'>"+currentGame.copyright+"</div>");
}

var font;

var vehicles = [];

var textInput;
function preload() {
  currentGame = loadJSON("manifest.json");

  font = loadFont('American Captain.otf');   
}
function setup(){
  createDivDescription();

  console.log("runnin!");
  createCanvas(windowWidth, windowHeight);
  background(51);
  textInput = createInput();
  textInput.input(newText);
  
  var points  = retreatText("| \\ | / |");//font.textToPoints('welcome!', 100, 200, 192);
  
  for (var i = 0; i < points.length; i++){
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    
  }
  
}
function draw() {
  background(51);
  for ( var i = 0; i < vehicles.length; i++){
    var v = vehicles[i];
    v.behviors();
    v.update();
    v.show();
  }
}

function newText(){
  points  = retreatText(textInput.value());//font.textToPoints(textInput.value(), 100, 200, 192);
  vehicles = [];
  for (var i = 0; i < points.length; i++){
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    
  }
  //console.log("new"+textInput.value);
}

function retreatText(mytext){

  //points = points.concat(font.textToPoints('lab', points[points.length-1].x+70, 200, 192))

  var res = [];// res = font.textToPoints(element, 100, 200, 192);
  var spacing = 50;
  mytext.split(' ').forEach(function(element) {
    console.log(element+" ."/*+res.max()*/+".");
    res = res.concat(font.textToPoints(element, spacing, 200, 192))
    spacing = getMax(res) + 50;
    // console.log(res);
    // console.log(getMax(res));
    // console.log(res[0].x+" "+res[0].y);
    // console.log(res[res.length-1].x+" "+res[res.length-1].y);
  });
  return res;
}
function getMax(arr){
  var max = 0;
  arr.forEach(function(e){
    if(e.x>max)max = e.x;
  });
  return max;
}





