
var list;

function preload(){
  loadJSON("data.json",gotData);  
  
}
function gotData(data){
  list = data;
}

function setup() {
  noCanvas();
  var names = list.names;
  var string = "";
  for(var i = 0; i < names.length; i++){
    string += names[i];
  }
  
}

function draw() {
  
}


