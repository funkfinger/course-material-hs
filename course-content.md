# High School Course Content - Day by Day
## All Courses - EVERY DAY
- take roll

## Coding as Art 1
### Day 1 (2023-01-03)
- Introduction slides: *link goes here*
- Generative Art Speedrun - [Tim Holman - Generative Art Speedrun](https://www.youtube.com/watch?v=4Se0_w0ISYk)
- Introduction to p5.js - [p5.js](https://p5js.org/get-started/)
- Explore p5.js examples inside the p5 editor - [editor.p5js.org](https://editor.p5js.org/)

### Day 2 (2023-01-04)

### Day 3 (2023-01-06)
#### Toolbelt
  - editor.p5js.org
#### Loops
```javascript
// Loop

const step = 20;

function setup() {
  createCanvas(400, 400);
  background("lightpink")
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
  let x = 0, y = 0;
  background(220);
  for( let v = 0; v < height; v = v + step ) {
    y = v + random(0, 10);
    for(let h=0; h < width; h = h + step ) {
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
  drawEgg(100,100);
  // drawEgg(random(width),random(height));
}

function drawEgg(x, y) {
  fill("white");
  ellipse(x, y, 100, 80);
  fill("yellow");
  ellipse(x-10, y-5, 30, 30);
}
```

### Day 4 (2023-01-10)
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
  
  for(let foo = 0; foo < squares.length; foo++ ) {
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
  
  for(let foo = 0; foo < squares.length; foo++ ) {
    square(squares[foo][0], squares[foo][1], squares[foo][2]);
  }
  
}
```

Making the array with a loop:
```javascript
const squares = [];

function setup() {
  createCanvas(1000, 1000);
  for(x=0; x < 100; x++) {
    for(y=0; y < 100; y++) {
      squares.push([x*10,y*10,random(20)]);
    }
  }
  
}

function draw() {
  background(220);
  
  for(let foo = 0; foo < squares.length; foo++ ) {
    square(squares[foo][0], squares[foo][1], squares[foo][2]);
  }
  
}
```

### Day 5 ()
- Thoughtful content

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
      if(isWhite) {
        fillColor = 255;
      }
      else {
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
Obects!



---















## Coding as Art 2/3
### Day 1 (2023-01-03)
- Introduction Slides: *link goes here*

### Day 2 (2023-01-05)
- Thoughtful content - choosing a pallete 
- Toolbelt:
  - VS Code
  - GitHub
  - Glitch

> Internet issues caused issues downloading above tools... 

### Day 3 (2023-01-09)
- Thoughtful content - [What's an Algorithm](https://youtu.be/6hfOvs8pY1k)
- Finish toolbelt installs
- Discuss projects individually

### Day 4 ()
- Thoughtful content - Patrog
- Coding challenge: make a chess / checker board in editor.p5js.org or Processing
- Go over objects
- Discuss projects individually
  - Talk about size and due date (critique) and actual due date


---

















## Sound Design 1
### Day 1 (2023-01-04)
- Introduction Slides: *link goes here*
- Elf - [Elf recut as a Thriller - Trailer Mix](https://www.youtube.com/watch?v=EkwdYSn3Uws)

### Day 2
- What is sound slides - [link goes here]()
  - also see this https://docs.google.com/presentation/d/1pOHfV9QXbs_UeKcLC3XYw0TXikO6c9sZiUBQQkSNA1I/edit?usp=sharing
- AI & autotune in music - [How Auto-Tune DESTROYED Popular Music](https://youtu.be/6IV29YNTH3M)
- Audacity

### Day 3 (2023-01-06)
- Thoughtful content - Timbaland techniques - [3 Techniques Timbaland Uses In His Beats](https://www.youtube.com/watch?v=CiHc05Izy8U&t=1s)
- Samples to beats part 1 - field recording of samples
- Build beat in Audacity
 
> Audacity was older version - needed updating. Also FFMPEG libraries needed to be installed in order to get audio from phones to computer.

### Day 4 (2023-01-09)
- Thoughtful content...
    - Baqer - [The sonic boom problem - Katerina Kaouri](https://www.youtube.com/watch?v=JO4_VHM69oI)
    - [J Dilla](https://www.youtube.com/watch?v=SENzTt3ftiU)
- BPM
  - [BPM calculator](https://toolstud.io/music/bpm.php?bpm=120&bpm_unit=4%2F4)
  - [tap BPM finder](https://www.beatsperminuteonline.com)
- [Beat map clapping](https://shedthemusic.com/beat-map-reading)

 
### Day 5 (2023-01-11)
- Thoughtful content...
    - Kather [What Does Sound Look Like? | SKUNK BEAR](https://youtu.be/px3oVGXr4mo)
- Anatomy of drum loop - [ANATOMY OF A DRUM BEAT](https://shedthemusic.com/anatomy-of-a-drum-beat-1)
- GarageBand
    - Software Intrument

---


















## Sound Design 2/3
### Day 1 (2023-01-04)
- Introduction Slides: *link goes here*
- Elf - [Elf recut as a Thriller - Trailer Mix](https://www.youtube.com/watch?v=EkwdYSn3Uws)
- Discuss individual projects with all students


### Day 2 (2023-01-05)
- AI & autotune in music - [How Auto-Tune DESTROYED Popular Music](https://youtu.be/6IV29YNTH3M)
- Discuss individual projects with each student

### Day 3 (2023-01-09)
- Thoughtful content... 
    - Nick - [fusion reactor startup sound](https://youtu.be/yRdkSxiS8ls)
    - Ridge - [How to Write Drum parts](https://youtu.be/FoMmVlAvjmM)
- Project work time
- Discuss individual projects with each student

### Day 4 (2023-01-11)
- Thoughtful content
    - Nick [Fusion Reactor Startup & Shutdown W/ Sound](https://youtu.be/yRdkSxiS8ls)
    - Ridge [How to Write Drum Parts (for non drummers)](https://youtu.be/FoMmVlAvjmM)
- Talk about projects due dates and critiques
    - First project - what we've already been talking about
        - critique
        - 
- Teenage Engineering POM-400 - [Modular Operator pt. 1 - Your First Patch - Teenage Engineering POM 170 and POM 400](https://youtu.be/pdcR8qlrwR8)
- DJ mixing
    - BPM, bars, measures, etc...
    - intros and outros

### Day 5 ()
- Thoughful content
- Critiques - what are they? How do they work? Critique something I make... (need to make something)


---
edit this doc on [Dillinger.io](https://dillinger.io) and save to [GitHub](https://github.com)

