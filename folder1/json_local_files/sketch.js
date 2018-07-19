
var datas;

function preload(){
  datas = loadJSON("data.json");  
  
}

function setup() {
  noCanvas();
  var names = datas.names;
  for(var i = 0; i < names.length; i++){
    createP(names[i]);
  }
}

function draw() {
  
}