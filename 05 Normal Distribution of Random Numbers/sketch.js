function setup () {
  createCanvas(640, 360);
  background(127);
}



function draw () {
  var xPosNum = randomGaussian();
  var xPosSd = 80;
  var xPosMean = 320;
  // Multiply the standard deviation and add the mean
  var x = xPosSd * xPosNum + xPosMean;

  var yPosNum = randomGaussian();
  var yPosSd = 45;
  var yPosMean = 180;
  // Multiply the standard deviation and add the mean
  var y = yPosSd * yPosNum + yPosMean;

  var rNum = randomGaussian();
  var rSd = 100;
  var rMean = 253;
  var r = rSd * rNum + rMean;

  var gNum = randomGaussian();
  var gSd = 100;
  var gMean = 23;
  var g = gSd * gNum + gMean;

  var bNum = randomGaussian();
  var bSd = 100;
  var bMean = 110;
  var b = bSd * bNum + bMean;


  noStroke();
  fill(r, g, b, 10);
  ellipse(x, y, 16, 16);
}
