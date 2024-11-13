function setup() {
  createCanvas(800, 600);
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
  
  let z = 100;
  let speed = 5;
  
  function draw () {
      background (240, 128, 128);
      cat (290, z, 1);
  
      z = z + 0;
  
      if (z < 400) {
          z = z + speed;
      }
  
  }