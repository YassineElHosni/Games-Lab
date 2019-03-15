var font;

var vehicles = [];

function preload() {
  font = loadFont('American Captain.otf');   
}
function setup(){
  console.log("runnin!");
  createCanvas(windowWidth, windowHeight);
  background(87,182,255);//51);

  var points  = font.textToPoints('Games-lab', 20, 100, 112);
  for (var i = 0; i < points.length; i++){
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    
  }
}
function draw() {
  console.log("runnin!");
  background(68,69,193);
  for ( var i = 0; i < vehicles.length; i++){
    var v = vehicles[i];
    v.behviors();
    v.update();
    v.show();
  }
}







