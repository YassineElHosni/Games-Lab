
var rects = [];
var effects = [];
var s = 100;
function block(x, y, col){
	this.x = x;
	this.y = y;
	this.col = col;
	this.show = function (){
		stroke(51);
		fill(this.col);
		rect(this.x, this.y, s, s);
	}
	this.update = function(){

	}
}

function setup() {
	createCanvas(1000, 1000);
	background(51);


	stroke(51);
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			rects.push(new block(i*s, j*s, color(0, 255, 255)));	
		}
	}
	for (let i = 0; i < rects.length; i++) {
		rects[i].show();
	}
}
function mousePressed(){
	explode(mouseX, mouseY);
}
function explode(x, y){
	function select(){
		for (var i = 1; i < 11; i++) {
			for (var j = 1; j < 11; j++) {
				if (x < (i*s) && x > (i*s-s) && y < (j*s) && y > (j*s-s) ){
					fill(255, 0, 0);

					x = i*s-s;
					y = j*s-s;
					let dif = 1;
					
					let interval = setInterval(boom, 100);
					function boom(){
						effects.push(new block(x ,y ,color(200,200,50)));
						effects.push(new block(x+s*dif, y, color(255, dif*100, 0)));
						effects.push(new block(x-s*dif, y, color(255, dif*100, 0)));
						effects.push(new block(x, y+s*dif, color(255, dif*100, 0)));
						effects.push(new block(x, y-s*dif, color(255, dif*100, 0)));

						dif++;
						console.log(dif);
						if(dif>=4){
							effects = [];
							clearInterval(interval);
						}
					}
					break;
				}
			}
		}

	}
	select();
}
function draw() {
	for (let i = 0; i < rects.length; i++) {
		rects[i].show();
	}
	for (let i = 0; i < effects.length; i++) {
		effects[i].show();
	}
}