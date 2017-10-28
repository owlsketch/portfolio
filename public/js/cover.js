import p5 from 'p5';

const sketch = function(p5) {
    //make library globally available
    window.p5 = p5;

    const parent = document.getElementById("p5-wrapper"); 
    let canvas = null;

    p5.setup = function() {
        canvas = p5.createCanvas(parent.offsetWidth, parent.offsetHeight);

        // Move the canvas so it's inside our <div id="cover-holder">.
        canvas.parent("p5-wrapper");
        canvas.id("cover");
        p5.fill(255);
    }

    p5.draw = function() {
        p5.ellipse(parent.offsetWidth/2, parent.offsetHeight/2, 100, 100);
    }

    window.onresize = function() {
        //at all points ratio must be preserved.
        //because max-height is set to 714px, at any point greater than this,
        //the width increases, but height remains the same. Need to maintain ratio.
        p5.resizeCanvas(parent.offsetWidth, parent.offsetHeight);
    }
}

export default sketch;
