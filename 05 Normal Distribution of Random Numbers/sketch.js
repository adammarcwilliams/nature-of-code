function setup () {
  createCanvas(640, 360);
  background(127);
}



function draw () {
  var num = randomGaussian();
  var sd = 60;
  var mean = 320;
  // Multiply the standard deviation and add the mean
  var x = sd * num + mean;

  noStroke();
  fill(255, 10);
  ellipse(x, 180, 16, 16);
}
