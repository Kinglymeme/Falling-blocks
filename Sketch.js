let num_boxes = 8;

let x_pos = [];
let y_pos = [];

let colr = [];
let colg = [];
let colb = [];

let spd = [];

let num;
let score = 0;
let game_over = false;

let timer = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  
  for (let i = 0; i < num_boxes; i ++){
    spd[i] = 1.5;
    y_pos[i] = -i * 80;
    x_pos[i] = random(40, width - 40);
    colr[i] = random(0,255);
    colg[i] = random(0,255);
    colb[i] = random(0,255);
  }
  
}

function draw() {
  if(game_over == false) {
    background(220);
    rectMode(CENTER);
    strokeWeight(3);
    stroke(0);
    
    for (let i = 0; i < num_boxes; i ++){
      rectangles(i);
      collision(i);
    }
    
    if (timer >= 12) {
      score++;
      timer = 0;
    }
    else {
      timer ++;
    }
    fill(180, 225, 255);
    if (mouseX >= 375){
      circle(375, height -10, 50);
    }
    else if(mouseX <= 25){
      circle(25,height -10, 50);
    }
    else{
      circle(mouseX, height -10, 50);
    }
  }
  else {
    background(0);
    fill(255,0,0);
    textSize(20);
    text("You lost.\nScore: " + score, width / 2.5, height / 2.1);
  }
  // first two numbers are the 2 coordinates 3rd is width 4th is Height(x,y,Width,Height) //
  
}

function rectangles(index) {
  rect(x_pos[index], y_pos[index], 50, 20);
  fall(5, index);
  textSize(20);
  text("Score: " + score, 100,20);
}

function collision(index) {
  if(mouseX + 46 >= x_pos[index] && mouseX - 46  <= x_pos[index] && y_pos[index] >= height - 10) {
  game_over = true;
    }
}

function fall(num, index) {
  fill(colr[index], colg[index], colb[index]);
  y_pos[index] += spd[index];
  if(y_pos[index] >= height) {
    y_pos[index] = 0;
    x_pos[index] = random(10, width - 10);
    spd[index] += 0.5;
    if(spd[index] > 7) {
      spd[index] = 7;
    }
  }
}
