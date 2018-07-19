function setup() {
  var cv = createCanvas(400,300);
  background(0);
  
  var div = createDiv("");
  div.style("background-color","red");
  div.style("width","600px");
  div.style("height","400px");
  var txt = createP("title");
  txt.parent(div);
  cv.parent(div);
}

function draw() {
  
}