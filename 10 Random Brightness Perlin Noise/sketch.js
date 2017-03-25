let increment = 0.01;

function setup() {
  createCanvas(640,360);
  background(0);

  let img = createImage(width, height);
  img.loadPixels();

  let xoff = 0.0; // Start xoff at 0

  for (let i = 0; i < img.width; i++) {
    xoff += increment;   // Increment xoff
    let yoff = 0.0;   // For every xoff, start yoff at 0

    for (let j = 0; j < img.height; j++) {
      yoff += increment; // Increment yoff
      noiseDetail(8, 0.5);
      let bright = noise(xoff, yoff) * 255;
      img.set(i, j, bright);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}

function draw() {

}
