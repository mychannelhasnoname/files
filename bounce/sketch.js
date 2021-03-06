let x;
let y;

let xspeed;
let yspeed;
let randomVar;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 400
  y = 400
  xspeed = 2
  yspeed = 2
}

function draw() {

  background(10);
  fill(245);
  ellipse(x,y,30,30)
  x = x + xspeed
  y = y + yspeed
  
  if (x + 4 == width || x - 4 == 0) {
    xspeed = -xspeed
  }
  
  if (y + 4 == height || y - 4 == 0) {
    yspeed = -yspeed
  }
}