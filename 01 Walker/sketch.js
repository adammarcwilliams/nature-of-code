var walker;
var stepX;
var stepY;

function setup () {
  createCanvas(640, 360);
  walker = new Walker();
  background(127);
}

function Walker () {
  this.x = width / 2;
  this.y = height / 2;

  this.render = function () {
    stroke('white');
    point(this.x, this.y)
  }

  this.step = function () {
    stepX = round(random(-1, 1));
    console.log('stepX : ', stepX);
    stepY = round(random(-1, 1));
    console.log('stepY : ', stepY);
    this.x += stepX;
    this.y += stepY;
  }
}

function draw () {
  walker.step();
  walker.render();
}
