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
  // fontSize = ceil(textWidth('╋'));
  fontSize = round(viewMax/64);
  textSize(fontSize); 
  // lineSpace = 2;
  lineHeight = ceil(fontSize);
  dbgMessageW = floor(viewMax/3);
  dbgMessageBaseX = fontSize/2;
  dbgMessageBaseY = lineHeight*1.25;
  frameRate(30); // フレームレート
  backColor = "#7f7f7f";
  smooth(); // アンチエイリアス(図形のエッジを滑らかにする)
}

function draw() {
  background(backColor);
  fill("#00ff00"); // 塗りつぶし
  dbgMessageX = dbgMessageBaseX;
  dbgMessageY = dbgMessageBaseY;
  dbgMessage("Hello World");
  dbgMessage("windowWidth="+windowWidth);
  dbgMessage("windowHeight="+windowHeight);
  dbgMessage("width="+width);
  dbgMessage("height="+height);
  dbgMessage("fontSize="+fontSize);
  dbgMessage("lineHeight="+lineHeight);
  fill("#ff7f00"); // 塗りつぶし
  distance = 0.068*viewMax+(viewOX-0.146*viewMax)*mouseX/width;
  for(i=0; i<12; i++){
    angle = TWO_PI*i/12;
    x = cos(angle)*distance;
    y = sin(angle)*distance;
    resetMatrix();
    translate(viewOX+x,viewOY+y);
    rotate(angle+TWO_PI*mouseX/width*6*sign(0.5-i%2));
    ellipse(0, 0, 0.068*viewMax, 0.029*viewMax); // 円を描く 
    resetMatrix();
    fill("#00ff00"); // 塗りつぶし
    dbgMessage("viewOX+x="+(viewOX+x));
    dbgMessage("viewOY+y="+(viewOY+y));
    dbgMessage("angle="+(angle));
  }
}

function sign(x) {
  return Math.sign(x);
}
