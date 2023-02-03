function setup() {
  createCanvas(400, 400);
  const wiggleInstance = new Wiggle(30, 30, 10);
  objectArray.push(wiggleInstance);
}

function draw() {
  background(220);
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].update();
    objectArray[i].display();
  }
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

  display() {
    circle(this.x, this.y, this.diameter);
  }
}
