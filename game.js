//Ladieees and gentleeeman! MY GAME FINALLY WORKS!

function setup() {
  createCanvas(500, 570);
  background (238, 232, 170);
}

let catY = 500;
let speed = 0;
let velocity = 0.1;
let acceleration = 0;
let gameScreen = "Start";

function startScreen() {
  background (173, 216, 230);
  textSize (60);
  text ("Cat Lander", 100, 120);
  push();
  fill (0, 0, 0);
  rect (150, 300, 200, 60, 40);
  textSize (35);
  fill (255, 255, 255);
  text ("START", 195, 345);
  pop();
}
function winScreen() {
  background (46, 139, 87);
  push();
  stroke (255, 255, 255);
  strokeWeight (2);
  textSize (60);
  fill (255, 255, 255);
  text ("YOU WON!", 90, 200);
  pop();
  fill (0, 0, 0);
  rect (148, 340, 200, 60, 40);
  rect (148, 420, 200, 60, 40);
  fill (255, 255, 255);
  textSize (20);
  text ("Play Again", 202, 375);
  textSize (20);
  text ("Menu", 220, 455);
}
function lostScreen() {
background (220, 20, 60);
push ();
stroke (0, 0, 0);
strokeWeight (2);
textSize (60);
fill (0, 0, 0);
text("YOU LOST!", 80, 200);
pop();
fill (0, 0, 0);
rect (148, 340, 200, 60, 40);
rect (148, 420, 200, 60, 40);
fill (255, 255, 255);
textSize (20);
text ("Play Again", 202, 375);
textSize (20);
text ("Menu", 220, 455);
}

function sofa () {
  background (238, 232, 170);
  push ();
  strokeWeight (1);
  fill (205, 205, 150);
  rect (60, 430, 360, 150, 10);
  rect (60, 530, 360, 150, 10);
  rect (30, 480, 80, 100, 10);
  rect (370, 480, 80, 100, 10);
  pop();
}

function cat (x, y, s) {
  fill (192, 192, 192);

  push ();
  // Tail 
  triangle (x + 30 * s, y + 30 * s, x + 100 * s, y - 100 * s, x + 140 * s, y - 80 * s);
  
  // Left backpaws
  ellipse (x - 60 * s, y + 30 * s, 40 * s, 30 * s);
  
  // Left front leg
  line (x - 70 * s, y - 70 * s, x - 90 * s, y + 40 * s);
  
  // Body
  ellipse (x - 20 * s, y - 40 * s, 130 * s, 150 * s);
  
  // Right front leg
  line (x - 20 * s, y - 60 * s, x - 55 * s, y + 50 * s);
  
  // Left front paw
  ellipse (x - 105 * s, y + 40 * s, 30 * s, 20 * s);
  
  // Right front paw
  ellipse (x - 70 * s, y + 50 * s, 30 * s, 20 * s);
  
  // Back leg
  ellipse (x + 20 * s, y + 10 * s, 70 * s, 80 * s);
  
  // Right back paws
  ellipse (x + 1 * s, y + 40 * s, 40 * s, 30 * s);
  
  // Left ear
  triangle (x - 90 * s, y - 205 * s, x - 50 * s, y - 185 * s, x - 75 * s, y - 155 * s);
  
  // Right ear
  triangle (x + 30 * s, y - 205 * s, x - 10 * s, y - 185 * s, x + 15 * s, y -155 * s);
  
  // Head
  ellipse (x - 30 * s, y - 140 * s, 100 * s, 100 * s);
  
  // Left whiskers
  line (x - 70 * s, y - 130 * s, x - 110 * s, y - 130 * s);
  line (x - 60 * s, y - 120 * s, x - 100 * s, y - 110 * s);
  
  // Right whiskers
  line (x + 10 * s, y - 130 * s, x + 50 * s, y - 130 * s);
  line (x + 1 * s, y - 120 * s, x + 40 * s, y - 110 * s);
  
  // Spot on left eye
  ellipse (x - 50 * s, y - 150 * s, 30 * s, 30 * s);
  
  // Nose 
  fill (0, 0, 0);
  triangle (x - 40 * s, y - 130 * s, x - 20 * s, y - 130 * s, x - 30 * s, y - 120 * s);
  
  // Eyes
  ellipse (x - 50 * s, y - 150 * s, 10 * s, 10 * s);
  ellipse (x - 10 * s, y - 150 * s, 10 * s, 10 * s);
  pop ();
  }

  sofa();
  cat (250, catY, 0.5);

function draw() {
  clear();
  if (gameScreen === "Start") {
    startScreen();
  } else if (gameScreen === "Game") {
    background (238, 232, 170);
    sofa();
    cat (250, catY, 0.5);
  } else if (gameScreen === "Lost") {
    lostScreen();
  } else if (gameScreen === "Win") {
    winScreen();
  }

    if (gameScreen === "Start") {
    if (mouseIsPressed) {
      if (mouseX >= 150 && mouseX <= 350 && mouseY >= 300 && mouseY <= 360) {
        gameScreen = "Game";
      }
    }
  }
    
  if (gameScreen === "Lost") {
    if (mouseIsPressed) {
      if (mouseX >= 147 && mouseX <= 348 && mouseY >= 342 && mouseY <= 400) {
        gameScreen = "Game";
      } else if (mouseX >= 147 && mouseX <= 348 && mouseY >= 422 && mouseY <= 480) {
        gameScreen = "Start";
      }
      }

  }
  if (gameScreen === "Win") {
    if (mouseIsPressed) {
      if (mouseX >= 225 && mouseX <= 425 && mouseY >= 340 && mouseY <= 400) {
        gameScreen = "Game";
      } else if (mouseX >= 225 && mouseX <= 425 && mouseY >= 422 && mouseY <= 480) {
        gameScreen = "Start";
      }
    }
  }
  
  if (gameScreen === "Game") {
    velocity += 2;
    acceleration += 0.01;
    if (keyIsDown(32)) {
      velocity -= 3;
    }

    catY += velocity;
    velocity += acceleration;
    if (catY > 530) {
      if (velocity > 13) {
        gameScreen = "Lost";
        catY = 80;
        velocity = 0.1;
        acceleration = 0;
        } else if (velocity < 13) {
        gameScreen = "Win";
        catY = 80;
        velocity = 0.1;
        acceleration = 0;
        }
      }
    }
  }