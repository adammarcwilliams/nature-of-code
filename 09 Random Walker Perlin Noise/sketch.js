var walker;
let timeX = 0;
let timeY = 1000;

function setup () {
  createCanvas(640, 360);
  walker = new Walker();
  background(127);
}

function Walker () {
  this.x = width / 2;
  this.y = height / 2;
  this.stepSize;

  this.render = function () {
    stroke('white');
    point(this.x, this.y)
  };

  // this.step = function () {
  //   this.x = map(noise(timeX), 0, 1, 0, width);
  //   this.y = map(noise(timeY), 0, 1, 0, height);
  //
  //   timeX += 0.01;
  //   timeY += 0.01;
  //
  // };

  this.step = function () {

    this.stepSize = map(noise(timeX), 0, 1, 0, 10);
    console.log(this.stepSize)

    this.x += random(-this.stepSize, this.stepSize);
    this.y += random(-this.stepSize, this.stepSize);

    timeX += 0.01;

  };
}

function draw () {
  walker.step();
  walker.render();
}
