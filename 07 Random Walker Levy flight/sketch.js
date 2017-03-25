var walker;
var stepX;
var stepY;
var stepSize;

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
  };

  this.montecarlo = function () {
    while (true) {
      r1 = random(0, 10);
      let probability = r1;
      let r2 = random(0, 10);

      if (r2 > probability) {
        return r1;
      }
    }
  }

  this.step = function () {

    stepSize = this.montecarlo();

    stepX = random(-stepSize, stepSize);
    stepY = random(-stepSize, stepSize);

    this.x += stepX;
    this.y += stepY;

    this.x = constrain(this.x, 0, width-1);
    this.y = constrain(this.y, 0, height-1);
  };


}

function draw () {
  walker.step();
  walker.render();
}
