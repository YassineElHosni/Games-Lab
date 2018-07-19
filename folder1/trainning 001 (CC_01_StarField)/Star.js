function Star() {

    this.x = random(0, width);
    this.y = random(0, height);
    this.z = random(0, width);
    this.update = function() {

    this.x = random(0, width);
    this.y = random(0, height);
    this.z = random(width);

    }
    this.show = function() {
    fill(255);
    noStroke();
    var r = 5;
    ellipse(this.x, this.y, r, r);
    
  }
}