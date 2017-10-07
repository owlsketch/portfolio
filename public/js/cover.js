var parent = document.getElementById('cover-holder');
var canvas = null;
function setup() {
  canvas = createCanvas(parent.offsetWidth, parent.offsetHeight);

  // Move the canvas so it's inside our <div id="cover-holder">.
  canvas.parent('cover-holder');
  canvas.id("cover");
  fill(255);
}

function draw() {
  ellipse(parent.offsetWidth/2, parent.offsetHeight/2, 100, 100);
}

window.onresize = function() {
  //at all points ratio must be preserved.
  //because max-height is set to 714px, at any point greater than this,
  //the width increases, but height remains the same. Need to maintain ratio.
  resizeCanvas(parent.offsetWidth, parent.offsetHeight);
}
