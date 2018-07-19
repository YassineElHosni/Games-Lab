
var myInput;
var mySlider;

var SR;
var SG;
var SB;

var r=255;
var g=255;
var b=255;

function setup() {
  myInput = createCanvas(400,300);
  background(0);
  
  colorMode(HSB,255);
  
  mySlider = createSlider(0,255,50);
  mySlider.input(f4);
  
  SR = createSlider(0,255,100);
  SR.input(f5);
  SG = createSlider(0,255,150);
  SG.input(f6);
  SB = createSlider(0,255,200);
  SB.input(f7);
  
  myInput.mouseOver(f1);
  myInput.mouseOut(f2);
  myInput.mousePressed(f3);
}
function f1(){
  background(255,0,0);
}
function f2(){
  background(0,0,255);
}
function f3(){
  background(0,255,0);
}
function f4(){
  background(mySlider.value());
  fill(0);
  text("values:"+mySlider.value(),100,100);
}
//rgb
function f5(){
  r = SR.value();
}

function f6(){
  g = SG.value();
}

function f7(){
  b = SB.value();
}

function draw() {
  background(r,g,b);
  fill(0);
  text("values:"+r+" "+g+" "+b,100,100);
}