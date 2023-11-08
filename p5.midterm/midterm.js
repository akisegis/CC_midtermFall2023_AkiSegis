// Aki Segismundo (see further notes at the bottom)
// Creative Coding Midterm Sec A

let scene = 0;
function setup(){
  createCanvas(600,600);
  background(0);
  frameRate(12);
}

function draw(){
  /*if (round(millis()/1000) == 0){
    drawFlag();
  }

  if (round(millis()/1000) == 3){
    background(255,204,153);
    drawFlagOut();
  }

  if (round(millis()/1000) >= 6){
    background(255,204,153);
    drawFlagPost();
  }*/
  rainbow();
} // 10/24 (polished 10/29)
/*
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
*/

function rainbow(){
  scene++;
  // this set of code uses the mouse Y position to determine the alpha of all the colors and modifies the gradient of select colors
  let aSet = 0;
  if (mouseY > 0 && mouseY < 400){
    aSet = mouseY/400*255;
  }
  if (mouseY < 0 && mouseY > -400){
    aSet = abs(mouseY)/400*255;
  }
  if (mouseY > 400){
    aSet = 255;
  }
  if (mouseY < -400){
    aSet = 0;
  } // choosing y 400 is to make the mouse field smaller so its easier to change the alpha + gradients

  let rCol = color(255,255-aSet,255-aSet, aSet);
  let oCol = color(255,128,255-aSet, aSet);
  let yCol = color(255,255,50, aSet);
  let gCol = color(0,255,128, aSet);
  let bCol = color(255-aSet,255-aSet,255, aSet);
  let pCol = color(128,255-aSet,255, aSet);

  // this set of code draws the rainbow and lets it be modified by time
  let c = frameCount%120; // tracks framerate of the piece and determines the count of the piece
  let inc = PI/120; // determines the increment of the arc as time passes
  
  push();
  translate(300,300);
  noStroke();
  fill(rCol);
  arc (0,150, 600, 600, PI, PI+inc*c);
  fill(oCol);
  arc (0,150, 500, 500, PI, PI+inc*c);
  fill(yCol);
  arc (0,150, 400, 400, PI, PI+inc*c);
  fill(gCol);
  arc (0,150, 300, 300, PI, PI+inc*c);
  fill(bCol);
  arc (0,150, 200, 200, PI, PI+inc*c);
  fill(pCol);
  arc (0,150, 100, 100, PI, PI+inc*c);
  pop();

  if (c == 0 && frameCount > 0){
    push();
    translate(300,300);
    noStroke();
    fill(rCol);
    arc (0,150, 600, 600, PI, 0);
    fill(oCol);
    arc (0,150, 500, 500, PI, 0);
    fill(yCol);
    arc (0,150, 400, 400, PI, 0);
    fill(gCol);
    arc (0,150, 300, 300, PI, 0);
    fill(bCol);
    arc (0,150, 200, 200, PI, 0);
    fill(pCol);
    arc (0,150, 100, 100, PI, 0);
    pop();
    }

  if (frameCount % 121 == 0){
    background(0);
  }// this catches a case where the rainbow needs to be reset so i chose one frame after the counter checks

  /*
    for(let i = mouseX; i < 600; i){ // attempts at coding the arc to follow mouse input
    fill(0);
    rect(-300, 175, 600, 50);
    pop();
  }

  while(mouseIsPressed){
    fill(0);
    rect(mouseX, mouseY, 10,10);
    let progress = mouseX/100*600;
    rect(-300, 175, progress, 50);
    pop();
  }*/
}

/*
  If given more time to polish, I would've added more ability to interact. So making the rainbow more variable to the mouse movements, adding more 
  background elements, and polishing the gradients of color. I also would've added more scenes. The flag idea was really interesting to me and I 
  wished I could've gotten the flag animation to work properly but the idea was there. 
*/
