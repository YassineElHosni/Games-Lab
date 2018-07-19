var font;

var vehicles = [];

var textInput;
function preload() {
  font = loadFont('American Captain.otf');   
}
function setup(){
  console.log("runnin!");
  createCanvas(windowWidth, windowHeight);
  background(51);
  textInput = createInput();
  textInput.input(newText);
  
  var points  = font.textToPoints('welcome!', 100, 200, 192);
  
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
  points  = font.textToPoints(textInput.value(), 100, 200, 192);
  vehicles = [];
  for (var i = 0; i < points.length; i++){
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    
  }
  //console.log("new"+textInput.value);
}








