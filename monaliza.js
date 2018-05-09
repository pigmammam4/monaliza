var mona;
var eye;
var mouse;
var tear;
var ftear;
var blood1;
var blood2;
var blood3;
var blood4;

function setup() {
  eye = 0;
  createCanvas(450, 668);
  background(0);
  mona = loadImage("mona.jpg");
  blood1 = loadImage("blood1.png");
  blood2 = loadImage("blood2.png");
  blood3 = loadImage("blood3.png");
  blood4 = loadImage("blood4.png");
  noStroke();
}

function draw () {
  image(mona, 0, 0);

  if (mouseButton == LEFT) {
  image(blood1,30,40,100,100);
  image(blood2,250,300,150,150);
  image(blood3,-50,500,100,100);
  image(blood4,350,0,100,100);
    eye += 1;
    fill(eye, 0, 0, 120);
    ellipse(182, 152.5, 8, 8);
    ellipse(226.5, 152.5, 12, 8.5);
    fill(eye, 0, 0, 100);
    arc(202, 203, 40, 20, 0, PI);
    fill(255, 255-eye, 255-eye, eye);
    arc(182, 156, 8, 140, 0, PI);
    arc(226.5, 156, 8, 140, 0, PI);
  }
}
