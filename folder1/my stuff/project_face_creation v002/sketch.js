var eyesColor;
var hairColor;
var skinColor;

var eyecol;

var haircol;

var skincol;

function setup() {
  //0 backgound
  createCanvas(400, 400);
  background(200);

  colorMode(HSB, 255);

  createMaterials();

  noStroke();
  rectMode(CENTER);
  ellipseMode(CENTER);

  // give the face colors values form the sliders.
  eyecol = color(eyesColor.value(), 240, 240);
  haircol = color(hairColor.value(), 200, 200);
  skincol = color(skinColor.value(), 59, 226);

  createClodes();
  createFace();



  //createColors();
}

function draw() { // x y width height.
  createClodes();
  createFace();
}

function createFace() {
  //1 hair
  fill(haircol);
  rect(200, 100, 200, 120);

  //2 top face
  //fill(150,40,25);
  //fill(200,140,120);
  fill(skincol);
  ellipse(200, 170, 200, 180);

  //1 hair part 2
  fill(haircol);
  rect(200, 80, 200, 50);
  ellipse(200, 90, 150, 50);


  //3 ears
  //fill(100,40,25);
  //fill(195,140,120);
  fill(skincol);
  ellipse(100, 190, 40, 60);
  ellipse(300, 190, 40, 60);

  //4 down face
  //fill(150,40,25);
  //fill(200,140,120);
  fill(skincol);
  ellipse(200, 230, 180, 170);

  //5 eyebrows
  //fill(100);
  fill(haircol);
  rect(150, 150, 40, 10);
  rect(250, 150, 40, 10);

  //6 eyes
  fill(255);
  ellipse(150, 165, 30, 12);
  ellipse(250, 165, 30, 12);
  fill(eyecol);
  ellipse(150, 165, 10, 10);
  ellipse(250, 165, 10, 10);


  //8 mouth
  fill(20);
  ellipse(213, 250, 10, 10);
  ellipse(187, 250, 10, 10);
  fill(255);
  rect(200, 250, 25, 10);

  //9 beard
  //fill(130);
  fill(haircol);
  ellipse(230, 225, 70, 20);
  ellipse(170, 225, 70, 20);
  //fill(140);
  fill(haircol);
  ellipse(200, 220, 80, 25);

  //fill(130);
  fill(haircol);
  ellipse(275, 240, 50, 70);
  ellipse(125, 240, 50, 70);
  //fill(140);
  fill(haircol);
  ellipse(260, 280, 70, 70);
  ellipse(140, 280, 70, 70);
  //fill(130);
  fill(haircol);
  ellipse(200, 310, 130, 70);

  //7 nose
  //fill(190,150,130);
  fill(skincol);
  ellipse(210, 200, 15, 15);
  ellipse(190, 200, 15, 15);
  ellipse(200, 190, 15, 15);
  //fill(180,140,130);
  fill(skincol);
  ellipse(200, 200, 25, 25);
}

function createClodes() {
  //create the clodes and set some colors.
  fill(130, 150, 190);
  ellipse(200, 320, 200, 150);
  rect(200, 375, 200, 100);
  fill(120, 140, 200);
  var r = rect(200, 375, 100, 100);
  //fill(200,140,120);
  
  //give the mid of the clodes a skin color.
  fill(skincol);
  rect(200, 375, 50, 100);
}

function createMaterials() {
  //create some paragarphes with there sliders,
  // and add events to those sliders.
  createP("colors");
  createP("eyes :");
  eyesColor = createSlider(0, 255, 50);

  eyesColor.input(changeEyeColor);

  createP("hair :");
  hairColor = createSlider(0, 511, 50);

  hairColor.input(changeHairColor);

  createP("skin :");
  skinColor = createSlider(0, 255, 50);

  skinColor.input(changeSkinColor);
  
  var btn_RandomColors = createButton("random");
  btn_RandomColors.mousePressed(randomColors);
}
/////     ///   events handlers :  ///     /////
function changeEyeColor() {
  eyecol = color(this.value(), 240, 240);
}
function changeHairColor() {
  if (this.value() <= 255) {
    haircol = color(this.value(), 200, 200);
  } else if (this.value() <= 511) {
    var b = this.value();
    b = map(b, 255, 0, 256, 511);
    haircol = color(0, 0, b);
  }
  //fill(0);
  //text(this.value(),500,500,100,100);
}
function changeSkinColor() {
  skincol = color(this.value(), 59, 226);
}
function randomColors(){
  eyecol = color(random(255), 240, 240);
  
  var hair = random(511);
  if (hair <= 255) {
    haircol = color(hair, 200, 200);
  } else if (hair <= 511) {
          hair = map(hair, 255, 0, 256, 511);
          haircol = color(0, 0, hair);
        }
  skincol =  color(random(255), 59, 226);
  
}





