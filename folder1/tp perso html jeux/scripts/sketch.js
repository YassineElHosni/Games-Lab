/// a prototype of the bomber game ///

	///						///

	var boomSound;
function preload(){
  
  //images
	console.log('images loading!');
  avatarImgLoad();
  mapImgLoad();
	bombImgLoad();
	console.log('images loaded!');
	
}

  var blocks = [];
  var bombs = [];
  var effects = [];
  var plys =[];
  var s;
  var dead = false;
  
  var count;
  var counter = 0;
  var interval;
  
  var msg_position;
  var msg_couter;
  var msg_timer;

function block(x, y, col){
	this.x = x;
	this.y = y;
	this.lifeCount = 4;
	this.col = col;
	this.img = mapImg[0];
	this.show = function (){
		//stroke(51);
		// fill(this.col);
		// rect(this.x, this.y, s, s);
		image(this.img, this.x, this.y, s, s);
	}
	this.update = function(){

	}
}
function booom(x, y, col){
	this.x = x;
	this.y = y;
	this.lifeCount = 4;
	this.col = col;
	this.img = bombImg[1];
	this.show = function (){
		//stroke(51);
		//fill(this.col);
		//rect(this.x, this.y, s, s);
		image(this.img, this.x, this.y, s, s);
	}
	this.update = function(){

	}
}
function setup() {
	
	//sound
	console.log('sound loading!');
	boomSound = loadSound("assets/sound/boom.mp3");
	console.log('sound loaded!');
	
	count = 0;
	plys.push(new ply(100, 100));
	createCanvas(1000, 1000);
	msg_position = createP("messages");
	msg_couter = createP("count "+count);
	background(51);
	noStroke();
	//line(0,0,300,300);

	//line(100,0,100,300);
	//line(200,0,200,300);
	//line(300,100,0,100);
	//line(300,200,0,200);

	// msg_timer = createP(counter);
	// function timeit(){
	// 	counter++;
	// 	msg_timer.html(counter);
	// }
	// interval = setInterval(timeit, 1000);


	s = 100;
	createMap();
// 	blocks.push(new block(0, 200, color(255, 0, 0)));
// 	blocks.push(new block(100, 100, color(255, 0, 0)));
//   blocks[0].img = mapImg[0];
	for (var i = 0; i < blocks.length; i++) {
		blocks[i].show();
	}
	console.log(blocks);
}
// function mousePressed(){
// 	clearInterval(interval);
// }
function keyTyped(){
	if (key == "e"){plys[0].img = avatarImg[0];
		is_wall("up");
	}else
	if (key == "d") {plys[0].img = avatarImg[1];
		is_wall("down");
	}else
	if (key == "f") {plys[0].img = avatarImg[3];
		is_wall("right");
	}else
	if (key == "s"){plys[0].img = avatarImg[2];
		is_wall("left");
	}else
	if (key == "b"){
		put_bomb();
	}
}
function is_wall(here){
	var x,y;
	if (here == "down") {
		y = plys[0].y+s;
		x = plys[0].x;
	}
	if (here == "up") {
		y = plys[0].y-s;
		x = plys[0].x;
	}
	if (here == "left") {
		x = plys[0].x-s;
		y = plys[0].y;
	}
	if (here == "right") {
		x = plys[0].x+s;
		y = plys[0].y;
	}
	var message;
	for (var i = 0; i < blocks.length; i++) {
		if (x >= width || x < 0 || y >= height || y < 0) {
			message = "stop void "+here+"!";
		}
		if (blocks[i].x == x && blocks[i].y == y){
			message = "stop wall "+here+"!";
		}
	}
	if (!message) {
		msg_position.html("move "+here);
		move(here);
	}else msg_position.html(message);

	count++;
	msg_couter.html("count "+count);

	//updata bombs
	for (var i = 0; i < bombs.length; i++) {
		if (bombs[i].lifeCount>1){
			bombs[i].lifeCount--;
		}else{
			console.log("boom!");
			var diff = 2;
			var dif = s*diff;
			//animation
			explode(bombs[i].x, bombs[i].y, diff);
			boomSound.play();
			//kill player if he is close..
			if( (plys[0].x >= (bombs[i].x-dif) && plys[0].x <= (bombs[i].x+dif) && plys[0].y == bombs[i].y) || (plys[0].y >= (bombs[i].y-dif) && plys[0].y <= (bombs[i].y+dif) && plys[0].x == bombs[i].x) ){
				console.log("you die!");dead = true;
				
			}
			softBlockBreak(i,dif);
			blockStop(i,dif);
			bombs.splice(i, 1);
		}
	}
  if(dead)plys[0].img = avatarImg[4];
  dead = false;
}
function move(here){

	if (here == "down") {
		plys[0].y += s;
	}
	if (here == "up") {
		plys[0].y -= s;
	}
	if (here == "left") {
		plys[0].x -= s;
	}
	if (here == "right") {
		plys[0].x += s;
	}
}
function put_bomb(){
	bombs.push(new block(plys[0].x, plys[0].y, color(255, 255, 0)));
	bombs[bombs.length-1].img = bombImg[0];
	count++;
	msg_couter.html("count "+count);
}
function draw() {
	background(51);

	for (var i = 0; i < blocks.length; i++) {
		blocks[i].show();
	}
	for (var i = 0; i < bombs.length; i++) {
		bombs[i].show();
	}
	for (var i = 0; i < effects.length; i++) {
		effects[i].show();
	}
	plys[0].show();
}

//animation::

function explode(x, y, diff){
	console.log(x+" "+y);
	function select(){
		// for (var i = 0; i < 10; i++) {
		// 	for (var j = 0; j < 10; j++) {
					console.log("animation"+s);
				// if (x <= (i*s) && x >= (i*s-s) && y <= (j*s) && y >= (j*s-s) ){

					// x = i*s-s;
					// y = j*s-s;
					var dif = 1;
					console.log(dif);
					var interval = setInterval(boom, 100);
					function boom(){
						effects.push(new booom(x ,y ,color(200,200,50)));
						effects.push(new booom(x+s*dif, y, color(255, dif*100, 0)));
						effects.push(new booom(x-s*dif, y, color(255, dif*100, 0)));
						effects.push(new booom(x, y+s*dif, color(255, dif*100, 0)));
						effects.push(new booom(x, y-s*dif, color(255, dif*100, 0)));

						dif++;
						if(dif>=(diff+2)){
							effects = [];
							clearInterval(interval);
						}
					}
					//break;
				// }
		// 	}
		// }

	}
	select();
}
function createMap(){
  var t =[[4,4,4,4,4,4,4,4,4,4],
          [4,0,0,0,0,0,0,0,0,4],
          [4,0,4,1,1,1,1,4,0,4],
          [4,0,1,0,0,0,0,1,0,4],
          [4,0,1,0,0,0,0,1,0,4],
          [4,0,1,0,0,0,0,1,0,4],
          [4,0,1,0,0,0,0,1,0,4],
          [4,0,4,1,1,1,1,4,0,4],
          [4,0,0,0,0,0,0,0,0,4],
          [4,4,4,4,4,4,4,4,4,4]
        ];
  for (i = 0; i < 10; i++){
    for (j = 0; j < 10; j++){
      if(t[i][j]==4){
        blocks.push(new block(j*s, i*s, color(255, 0, 0)));
      }else if(t[i][j]==1){
        blocks.push(new block(j*s, i*s, color(255, 0, 0)));
        blocks[blocks.length-1].img = mapImg[1];
      }
    }
  }
}
function softBlockBreak(bomb, long){
  for(i = 0; i < blocks.length; i++){
    //test if current blocks is in the tragectory/place/field of explosion
  }
}
function blockStop(bomb, long){
  //...
}
/*




  img = loadImage("assets/6.png");  // Load the image
  image(img, mouseX, mouseY,500,500);


  ~
  song = loadSound("...mp3");
  song.play();
  song.stop();

*/