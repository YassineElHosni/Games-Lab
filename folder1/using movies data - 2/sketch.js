var items = [];

function setup() {
  createCanvas(12040,330);
  background(51);
  
  create();
  fill(150,200,200);
  //stroke(255,0,0);
  textSize(15);
  display();
  design();
  
}
function create(){
  var solos = movies.solos;
  for(var i = 0;i < 119;i++){
    items.push(new item( ((i+1)*100) ,solos[i].year));
  }
}

function draw() {
  
}

function display(){
  for(var i = 0;i < 119;i++){
    items[i].show();
  }
}
function design(){
  var solos = movies.solos;
  for(var i = 0;i < 119;i++){
  noStroke();
  fill(150,200,200);
    var y = map(solos[i].year,1973,2020,300,0);
    text(solos[i].year,10,y);
  }
}

