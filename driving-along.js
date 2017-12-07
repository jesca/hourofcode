
// http://alpha.editor.p5js.org/jesca/sketches/H1EeYJ8WM


Step 1 + 2
// setup canvas and draw some shapes, play with x,y, rbg

	function setup() {
		createCanvas(500, 500);

		// red, green, blue
		background(20, 100, 300);
	}


  function draw() {
		// Draw a rectangle at location (x, y), width, height
		// rect(100, 200, 100, 20);
		rect(125, 170, 50, 50);
 		ellipse(425, 100, 100, 100);
	}




  Step 3
  // draw a car
  function draw() {

  fill(500, 100, 250);
  stroke(0, 100, 250);


  // draw the car body
  // Draw a rectangle at location (x, y), width, height
  rect(25, 140, 80, 80);

  ellipse(35, 221, 24, 24);
  ellipse(95, 221, 24, 24);
}


Step 4  move the car
function setup() {
  createCanvas(500, 500);

}

var x = 35;
function draw() {

    // red, green, blue
  background(20, 100, 300);

  fill(500, 100, 250);
  stroke(0, 100, 250);


  // draw the car body
  // Draw a rectangle at location (x, y), width, height
  rect(x-10, 140, 80, 80);
  ellipse(x, 221, 24, 24);
  ellipse(x+60, 221, 24, 24);
  x=x+10

  if (x> 600) {
    x = 35
  }
}



Step 5  Conditionals
Restart the car if it goes off screen

Step 6 Mouse move
function setup() {
  createCanvas(500, 500);

}

var x = 35;
function draw() {
  fill(500, 100, 250);
  stroke(0, 100, 250);


if (mouseIsPressed) {
    console.log('press')
    fill(400, 8, 0);
}
 else{
   fill(320, 300, 10);
 }

  // red, green, blue
  background(20, 100, 300);



  // draw the car body
  // Draw a rectangle at location (x, y), width, height
  rect(x-10, 140, 80, 80);
  ellipse(x, 221, 24, 24);
  ellipse(x+60, 221, 24, 24);
  x=x+1

  console.log(x)
  if (x> 600) {
    x = 35
  }
}
