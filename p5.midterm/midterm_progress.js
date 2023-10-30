// Aki Segismundo
// Creative Coding Midterm Mockup Sec A

function setup(){
  createCanvas(600,600);
  background(255,204,153);
} // 10/24

function draw(){
  if (round(millis()/1000) == 0){
    drawFlag();
  }

  if (round(millis()/1000) == 3){
    background(255,204,153);
    drawFlagOut();
  }

  if (round(millis()/1000) >= 6){
    background(255,204,153);
    drawFlagPost();
  }
} // 10/24 (polished 10/29)

function drawFlag(){
  push();
  translate(300,300);
  noStroke();
  fill(255,0,0);
  rect(-300,-300,600,100);
  fill(255,128,0);
  rect(-300,-200,600,100);
  fill(255,255,0);
  rect(-300,-100,600,100);
  fill(0,255,0);
  rect(-300,0,600,100);
  fill(0,0,255);
  rect(-300,100,600,100);
  fill(128,0,255);
  rect(-300,200,600,100);
  pop();
} // 10/25-10/26 (polished 10/29)

function drawFlagOut(){
  push();
  translate(300,300);
  noStroke();
  fill(255,0,0);
  rect(-300,-225,600,75);
  fill(255,128,0);
  rect(-300,-150,600,75);
  fill(255,255,0);
  rect(-300,-75,600,75);
  fill(0,255,0);
  rect(-300,0,600,75);
  fill(0,0,255);
  rect(-300,75,600,75);
  fill(128,0,255);
  rect(-300,150,600,75);
  pop();
} // 10/25-10/26 (polished 10/29)

function drawFlagPost(){
  push();
  translate(300,300);
  noStroke();
  fill(255,0,0);
  rect(-150,-100,300,20);
  fill(255,128,0);
  rect(-150,-80,300,20);
  fill(255,255,0);
  rect(-150,-60,300,20);
  fill(0,255,0);
  rect(-150, -40,300,20);
  fill(0,0,255);
  rect(-150,-20,300,20);
  fill(128,0,255);
  rect(-150,0,300,20);
  fill(204,102,0);
  rect(-165,-100,15,400);
  pop();
} // 10/25-10/26 (polished 10/29)

/* 
  10/30 plans
  - switch from millis() to framecount
  - create a class called stripe to add movement and a ripple effect to the flag
  - make the zoom out smoother and more fluid
  - possibly loop the scenes so it doesnt just stop at one scene 
  OR
  - only have it play the movement on the flag at the end (this is more likely)

*/
