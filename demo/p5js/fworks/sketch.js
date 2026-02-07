let xPos = 0;
let yPos = 0;
let fireRadius = 0;
let fireHeight = 0;
let fireBall = 0;
let angle = 0;
let fire = false;
let launch = false;
let pop = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    viewMinimum = min(width, height);
    viewMaximum = max(width, height);
    viewOX = width / 2;
    viewOY = height / 2;
    backColor = "#000000";
    fontFamily = 'MS PMincho';
    textFont(fontFamily);
    // fontSize = ceil(textWidth('╋'));
    fontSize = round(viewMinimum/48);
    textSize(fontSize); 
    // lineSpace = 2;
    lineHeight = round(fontSize);
    dbgMessageW = floor(viewMaximum/3);
    dbgMessageBaseX = fontSize/2;
    dbgMessageBaseY = lineHeight*1.25;
  background(backColor);
  frameRate(30);
  smooth(); // アンチエイリアス(図形のエッジを滑らかにする)
  noStroke();
  angle = radians(15);
}

function draw() {
  fill( 0, 0, 0, 15);
  rect(0, 0, width, height);
  if (launch) {
    if (yPos < fireHeight) {
      fill("#ffffff");
      ellipse(xPos, fireHeight, fireBall, fireBall);
      fireHeight -= viewMinimum/350;
    } else {
      // resetMatrix();
      translate(xPos, yPos);
      fill("#ff0000");
      let a = 0;
      for (let i = 0; i < 24; i++) {
        let x, y;
        x = sin(a) * fireRadius;
        y = cos(a) * fireRadius;
        ellipse(x, y, fireBall, fireBall);
        a += angle;
      }
      fireRadius += viewMinimum/350;
      if(width<fireRadius & height<fireRadius){
        launch = false;
      }
    }
  }
}

function mouseClicked() {
  xPos = mouseX;
  yPos = mouseY;
  launch = true;
  fireRadius = 0;
  fireBall = viewMinimum/70;
  fireHeight = windowHeight;
}
