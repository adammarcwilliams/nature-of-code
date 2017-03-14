var walker;

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
    strokeWeight(2);
    point(this.x, this.y)
  }

  this.step = function () {
    var r = random(1);
    // A 50% chance of moving towards the mouse
    if (r < 0.5) {
      var xdir = (mouseX - this.x);
      var ydir = (mouseY - this.y);
      // By dividing the direction by the absolute of the direction you always get a -1 or 1;
      if (xdir !== 0) {
        xdir /= abs(xdir);
      }
      if (ydir !== 0) {
        ydir /= abs(ydir);
      }
      this.x += xdir;
      this.y += ydir;
    } else {
      var xdir = random(-2, 2);
      var ydir = random(-2, 2);
      this.x += xdir;
      this.y += ydir;
    }
    this.x = constrain(this.x, 0, width-1);
    this.y = constrain(this.y, 0, height-1);
  }

}

function draw () {
  walker.step();
  walker.render();
}
