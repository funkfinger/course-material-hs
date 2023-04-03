---
type: course
title: Course Content for Coding as Art 1
semester: 2023 Spring
---

# Coding as Art 1

### Day 1 (2023-01-03)✅

- Introduction slides: _link goes here_
- Generative Art Speedrun - [Tim Holman - Generative Art Speedrun](https://www.youtube.com/watch?v=4Se0_w0ISYk)
- Introduction to p5.js - [p5.js](https://p5js.org/get-started/)
- Explore p5.js examples inside the p5 editor - [editor.p5js.org](https://editor.p5js.org/)

### Day 2 (2023-01-04)✅

### Day 3 (2023-01-06)✅

#### Toolbelt

- editor.p5js.org

#### Loops

```javascript
// Loop

const step = 20;

function setup() {
  createCanvas(400, 400);
  background("lightpink");
  for (let loopVar = 0; loopVar < width; loopVar = loopVar + step) {
    square(loopVar, loopVar, step);
    // ellipse(loopVar, step, step);
    // ellipse(step, loopVar, step);
  }
}

function draw() {}
```

#### Random

```javascript
function setup() {
  createCanvas(400, 400);
  frameRate(5);
  // colorMode(HSB);
}

function draw() {
  background(random(255));
  // background(random(255), 255, 255);
}
```

#### Nested loop with random

```javascript
// Nested Loop With Random

function setup() {
  createCanvas(400, 400);
  frameRate(5);
}

const step = 10;

function draw() {
  let x = 0,
    y = 0;
  background(220);
  for (let v = 0; v < height; v = v + step) {
    y = v + random(0, 10);
    for (let h = 0; h < width; h = h + step) {
      x = h + random(0, 10);
      ellipse(x, y, 5);
    }
  }
}
```

#### Function

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawEgg(100, 100);
  // drawEgg(random(width),random(height));
}

function drawEgg(x, y) {
  fill("white");
  ellipse(x, y, 100, 80);
  fill("yellow");
  ellipse(x - 10, y - 5, 30, 30);
}
```

### Day 4 (2023-01-10)✅

- Thoughtful content

#### Conditionals & Booleans

```javascript
void setup(){
  size(400,400);
}

void draw(){
  if(mouseX <= width/2){
    background(255);
  }
  else {
    background(0);
  }
  fill(255,0,0);
  ellipse(mouseX,mouseY,50,50);
}
```

#### Arrays

Simple example:

```javascript
const squares = [];

function setup() {
  createCanvas(400, 400);
  squares.push(10);
  squares.push(30);
  squares.push(40);
  squares.push(70);
  console.log(squares);
}

function draw() {
  background(220);
  square(squares[0], 20, 10);
  square(squares[1], 20, 10);
  square(squares[2], 20, 10);
  square(squares[3], 20, 10);
}
```

Looping over an array:

```javascript
const squares = [];

function setup() {
  createCanvas(400, 400);
  squares.push(10);
  squares.push(30);
  squares.push(40);
  squares.push(70);
  console.log(squares);
}

function draw() {
  background(220);

  for (let foo = 0; foo < squares.length; foo++) {
    square(squares[foo], 20, 10);
  }
}
```

Multi-dimensional arrays:

```javascript
const squares = [];

function setup() {
  createCanvas(400, 400);
  squares.push([10, 30, 100]);
  squares.push([30, 200, 30]);
  squares.push([40, 300, 90]);
  squares.push([70, 100, 10]);
  console.log(squares);
}

function draw() {
  background(220);

  for (let foo = 0; foo < squares.length; foo++) {
    square(squares[foo][0], squares[foo][1], squares[foo][2]);
  }
}
```

Making the array with a loop:

```javascript
const squares = [];

function setup() {
  createCanvas(1000, 1000);
  for (x = 0; x < 100; x++) {
    for (y = 0; y < 100; y++) {
      squares.push([x * 10, y * 10, random(20)]);
    }
  }
}

function draw() {
  background(220);

  for (let foo = 0; foo < squares.length; foo++) {
    square(squares[foo][0], squares[foo][1], squares[foo][2]);
  }
}
```

### Day 5 (2023-01-12)

- Thoughtful content

#### Example of live coding...

Chessboard example:

```javascript
function setup() {
  createCanvas(1000, 1000);

  let s = 100;
  let isWhite = false;
  let fillColor = 255;

  background(220);

  for (let x = 0; x < height; x = x + s) {
    isWhite = !isWhite;
    for (let y = 0; y < width; y = y + s) {
      isWhite = !isWhite;
      if (isWhite) {
        fillColor = 255;
      } else {
        fillColor = 0;
      }
      fill(fillColor);
      square(x, y, s);
      // console.log("x: ", x, "y: ", y, "fillColor: ", fillColor);
    }
  }
}
```

Another way to color the spaces...

```javascript
function setup() {
  createCanvas(1000, 1000);

  let s = 100;
  let fillColor = -255;

  background(220);

  for (let x = 0; x < height; x = x + s) {
    fillColor = fillColor * -1;
    for (let y = 0; y < width; y = y + s) {
      fillColor = fillColor * -1;
      fill(fillColor);
      square(x, y, s);
      // console.log("x: ", x, "y: ", y, "fillColor: ", fillColor);
    }
  }
}
```

##### Objects

Build up to finish the code as below:

- create the class
- create a single object - `console.log` the object
- reference the single object
  - `w.draw()` & `w.update`
- make an array and fill it with objects
- update the array of objects
- show that they still exist if not on screen - `console.log`

```javascript
let w;
const wArray = [];

function setup() {
  createCanvas(400, 400);
  for (let x = 0; x < 1000; x++) {
    wArray.push(new Wiggle(random(width), random(height), 10));
  }
}

function draw() {
  background(220);
  for (let x = 0; x < wArray.length; x++) {
    wArray[x].update();
    wArray[x].draw();
  }
  console.log(wArray.length);
}

class Wiggle {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
  }

  update() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
    this.y = this.y - 2;
    if (this.y < 0) {
      this.y = height;
    }
  }

  draw() {
    circle(this.x, this.y, this.d);
  }
}
```

### Day 6 (2023-01-13)

- Thoughtful content
  - Samantha - [Measuring a bowler’s pace in a matter of seconds | Speed Guns | Radar Principle | Wicket to Wicket](https://www.youtube.com/watch?v=kcr26gZAulg)
- Objects and functions

### Day 7 (2023-01-17)

- Thoughtful content
  - Rachel - [What is color? - Colm Kelleher](https://www.youtube.com/watch?v=UZ5UGnU7oOI)
- Code a soundboard - live coding

### Day 8 (2023-01-20)

- Code a soundboard - live coding

### Day 9 (2023-01-24)

- Thoughtful content - Clemente [AWS + NFL: Nothing Matters More | Amazon Web Services](https://youtu.be/csykudKP2T4)
- Finish coding a soundboard - live coding

### Day 10 (2023-01-)

- Thoughtful content - Ahmed [How will AI change the world?](https://youtu.be/RzkD_rTEBYs)
- Work on personal projects - some students went to watch sports

### Day 11 (2023-01-31)

- Thoughtful content - []()
- live coding object example

### Day 12 (2023-02-03)

- Thoughtful content - Dilan - [How the NFL's Digital Athlete uses AI to reduce concussions in American Football](https://youtu.be/D-EK7CO0oFo)
- Color assignment

### Day 13 (2023-02-09)

- Thoughtful content - ?? Deven - [robot soccer]()
- Linear Interpolation (Lerp)

### Day 14 (2023-02-13)

- Thoughtful content - Ben
- Vectors

### Day 15 (2023-02-14)

- Hearts for Valentines day

### Day 15 (2023-02-16)

- Thoughtful content - Ben [Can AI like ChatGPT, Bard think for itself?](https://youtu.be/xuyOe2i-InI)

### Day 16 (2023-02-21)

- Thoughtful Content - Ryan [The Simplest Sorting Algorithm (You’ve Never Heard Of)](https://youtu.be/_W0yUJlscRA)
- Image manipulation code along

### Day 16 (2023-02-23)

- Thoughtful Content - Aila [Is Your Phone Listening To You?](https://youtu.be/NwTmHNt-IG8)
- Perlin noise code along

### Day 16 (2023-02)

- Thoughtful Content - Samantha [Do Those Glasses Really Fix Colorblindness?](https://www.youtube.com/watch?v=BrEyOkNRzGI)

### Day 17 (2023-03-02)

- Arts Walk!!
- Interest in Coding as Art II?

### Day 18 (2023-03-06)

- Thoughtful content - Jay []()
- Code along?

### Day 19 (20230-03-)

- Thoughtful content - Clemente []()
- Flow Field Code-A-Long

### Day 20 (2023-03-09)

- Thoughtful content - Jay [Smoking algorithm]()

### Day 21 (2023-03-)

- Thoughtful content - []()

### Day ?? (2023-04-03)

- Thoughtful content Jay [Modular Isometric Pixel Art | Tutorial](https://youtu.be/YN7X0NfxjPc)
- Array project review

### Day ?? (2023-04-05)

- Thoughtful content - Ahmed []()
- Array project due

---

edit this doc on [Dillinger.io](https://dillinger.io) and save to [GitHub](https://github.com)
