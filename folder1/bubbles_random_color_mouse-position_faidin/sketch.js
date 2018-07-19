var bubbles = [];

function setup() {
  createCanvas(400, 300);
  background(100);

  for (var i = 0; i < 10; i++) {
    bubbles.push(new bubble(random(150, width - 150), random(100, height - 100)));
  }

}

function draw() {
  background(100);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();

    //test loop
    for (var j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersect(bubbles[j])) {
         bubbles[i].col = color(random(255),random(255),random(255),100);

        //colide
          for (var j = 0; j < bubbles.length; j++) {
            if (i != j && bubbles[i].intersect(bubbles[j])) {

              if (bubbles[i].x < bubbles[j].x) {
                bubbles[i].x--;
                bubbles[j].x++;
              } else if (bubbles[i].x >= bubbles[j].x) {
                bubbles[i].x++;
                bubbles[j].x--;
              }

              if (bubbles[i].y < bubbles[j].y) {
                bubbles[i].y--;
                bubbles[j].y++;
              } else if (bubbles[i].y >= bubbles[j].y) {
                bubbles[i].y++;
                bubbles[j].y--;
              }

            }
          }
        //limit to 50 bubbles
        if(bubbles.length > 50){
          bubbles.splice(0,1);
        }
        //end of the test loop.
      }
    }
  }

}

function mouseDragged() {
  bubbles.push(new bubble(mouseX, mouseY));
}