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

var ps = [];
var numbers = [];

var pixSize = 30;

var displayIndex = 0;
function setup() {
  createDivDescription();
  createCanvas(400,300);
  background(150);
  
  
  displayBG(pixSize);
}
function displayBG(s){
  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      ps.push(new pixel(i,j));
    }
  }
  for(var i = 0; i < ps.length; i++){
    ps[i].show(s);
  }
}
function selectRect(x,y){
  for(var i = 0; i < ps.length; i++){
    var pix = ps[i].values();
    // var d = dist(x,y,pix.x+15,pix.y+15);
    // if(d<15){
    //   console.log("selected x: "+pix.x+" ,y: "+pix.y+" ,using x: "+x+" ,y:"+y);
    // }
    if(pix.x<x && (pix.x+pixSize)>x && pix.y<y && (pix.y+pixSize)>y){
      console.log("found x: "+pix.x+" ,y: "+pix.y+" ,using x: "+x+" ,y:"+y);
      ps[i].select();
      ps[i].show(pixSize);
    }
  }
  console.log("done!");
}
function mousePressed(){
  console.log("searching...");
  selectRect(mouseX,mouseY);
}
function keyTyped(){
  if(key==' '){
    console.log("new.space");
    displayBG(30);
  }
  if(key=='a'){
    console.log("add.a");
    var data = [];
    for(var i = 0; i < ps.length; i++){
      if(ps[i].selected){
        data.push(new pixel(ps[i].x,ps[i].y));
        ps[i].reset();
      }
    }
    for(var i = 0; i < data.length; i++){
      data[i].select();
    }
    numbers.push(data);
    displayIndex = 0;
  }
  if(key=='d'){
    displayBG(pixSize);
    console.log("display.d")
    var items = numbers[displayIndex];
    console.log(items);
    for(var i = 0; i < items.length; i++){
      items[i].show(pixSize);
    }
    displayIndex++;
    if(displayIndex>=numbers.length){
      displayIndex=0;
    }
  }
}
function draw() {
  
}