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
    var r = random(1);
    // 40% chance moving to the right or down. 10% chance moving to the left or up
    if (r < 0.4) {
      this.x++;
    } else if (r < 0.5) {
      this.x--;
    } else if (r < 0.6) {
      this.y--;
    } else {
      this.y++;
    }
  }

  // this.step = function () {
  //   var r = random(1);
  //   var mousePosX = round(norm(mouseX, width/2, width));
  //   var mousePosY = round(norm(mouseY, height/2, height));
  //   // 50% chance moving towards the mouse cursor
  //   if (r < 0.5) {
  //     this.x += mousePosX
  //     this.y += mousePosY
  //   } else {
  //     this.x += random(1);
  //     this.y += random(1)
  //   }
  //
  //   this.x = constrain(this.x, 0, width-1);
  //   this.y = constrain(this.y, 0, height-1);
  // }
}

function draw () {
  walker.step();
  walker.render();
}
