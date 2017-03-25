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

    var num = randomGaussian();
    var sd = 1;
    var mean = 0.5;
    var steps = sd * num + mean;

    if (stepX < 0) {
      this.x += stepX - steps;
    } else {
      this.x += stepX + steps;
    }
    if (stepY < 0) {
     this.y += stepY - steps;
    }
     this.y += stepY + steps;
  }
}

function draw () {
  walker.step();
  walker.render();
}
