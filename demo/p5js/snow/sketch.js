// p5.js processing

function dbgMessage(tx){
  if( height<(dbgMessageY+lineHeight) ){
    dbgMessageY = dbgMessageBaseY;
    dbgMessageX += dbgMessageW;
  }
  text(tx,dbgMessageX,dbgMessageY);
  dbgMessageY += lineHeight;
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  viewOX = width/2;
  viewOY = height/2;
  viewMin = min(width, height);
  viewMax = max(width, height);
  fontFamily = 'MS PMincho';
  textFont(fontFamily);
  // fontSize = round(textWidth('╋'));
  fontSize = floor(viewMin/48);
  textSize(fontSize); 
  // lineSpace = 2;
  lineHeight = ceil(fontSize);
  dbgMessageW = floor(viewMax/3);
  dbgMessageBaseX = fontSize/2;
  dbgMessageBaseY = lineHeight*1.25;
  frameRate(30); // フレームレート
  backColor = "#7f7f7f";
  smooth(); // アンチエイリアス(図形のエッジを滑らかにする)
  display = true; // false; //
  musCount = 0;
  musMaximum = 4;
  noLoop();
  redraw();
}

function draw() {
  display = false; // true; //
  background(backColor);
  fill("#ffffff"); // 塗りつぶし
  dbgMessageX = dbgMessageBaseX;
  dbgMessageY = dbgMessageBaseY;
  dbgMessage("Hello World");
  dbgMessage("windowWidth="+windowWidth);
  dbgMessage("windowHeight="+windowHeight);
  dbgMessage("width="+width);
  dbgMessage("height="+height);
  dbgMessage("fontSize="+fontSize);
  dbgMessage("lineHeight="+lineHeight);
  size = viewMin*0.9;
  Hexagon(viewOX, viewOY, size, 0, musCount);
}

function mouseClicked(){
  display = true; // false; //
  musCount++;
  musCount = musCount%(musMaximum+1);
  redraw();
}

function Hexagon(ox, oy, size, n, m){
  var i,x,y,sd;
  sd = size/3;
  n++;
  if(n<=m){
    Hexagon(ox, oy, sd, n, m);
    for( i = 0; i<6; i++){
      x = ox+cos(TWO_PI*i/6)*sd;
      y = oy+sin(TWO_PI*i/6)*sd;
      Hexagon(x, y, sd, n, m);
     }
  }else{
    // strokeWeight(0);
    noStroke();
    resetMatrix();
    translate(ox,oy);
    fill("#ffffff"); // 塗りつぶし
    beginShape();
    for( i = 0; i<6; i++){
      x = cos(TWO_PI*i/6)*size/2;
      y = sin(TWO_PI*i/6)*size/2;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
