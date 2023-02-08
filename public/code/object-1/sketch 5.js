let wig;

function setup() {
  createCanvas(400, 400);
  wig = new Wiggle(200, 200, 10);
}

function draw() {
  background(220);
  wig.update();
  wig.draw();
}

class Wiggle {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.diameter = d;
  }

  update() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  draw() {
    circle(this.x, this.y, this.diameter);
  }
}
