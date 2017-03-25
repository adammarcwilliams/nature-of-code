function setup () {
  createCanvas(640, 360);
  background(127);

  this.time = 0;
}

function draw () {
  let n = noise(this.time);
  let x = map(n, 0, 1, 0, width);
  let y = random(0, height);

  line(x, y, width / 2, height / 2);

  this.time += 0.01;
}
