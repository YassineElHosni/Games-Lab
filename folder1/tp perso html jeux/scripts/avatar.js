
var avatarImg = [];
function avatarImgLoad(){
  avatarImg[0] = loadImage("assets/player1/move/new/up0.png");
	avatarImg[1] = loadImage("assets/player1/move/new/down0.png");
	avatarImg[2] = loadImage("assets/player1/move/new/left0.png");
	avatarImg[3] = loadImage("assets/player1/move/new/right0.png");
	avatarImg[4] = loadImage("assets/player1/move/new/dead.png");

}
function ply(x, y){
	this.x = x;
	this.y = y;
	this.img = avatarImg[1];
	this.show = function (){
		image(this.img, this.x, this.y, s, s);
	}
	this.update = function(){

	}
}