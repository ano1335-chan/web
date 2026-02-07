function dbgMessage(tx){
  if( height<(dbgMessageY+lineHeight) ){
    dbgMessageY = dbgMessageBaseY;
    dbgMessageX += dbgMessageW;
  }
  text(tx,dbgMessageX,dbgMessageY);
  dbgMessageY += lineHeight;
}
function sign(x) {
  return Math.sign(x);
}

function setup() {
  windowMin = min(windowWidth, windowHeight);
  windowMax = max(windowWidth, windowHeight);
  bodyClientWidth = document.body.clientWidth;
  bodyClientHeight = document.body.clientHeight;
  bodyClientMin = min(bodyClientWidth, bodyClientHeight);
  bodyClientMax = max(bodyClientWidth, bodyClientHeight);
  canvas = createCanvas(bodyClientMin, bodyClientMin);
  canvas.parent('idCanvasContainer');
  viewOX = width/2;
  viewOY = height/2;
  viewMin = min(width, height);
  viewMax = max(width, height);
  fontFamily = 'MS PMincho';
  textFont(fontFamily);
  // fontSize = ceil(textWidth('╋'));
  fontSize = round(windowMin/36);
  textSize(fontSize); 
  // lineSpace = 2;
  lineHeight = ceil(fontSize);
  dbgMessageW = floor(windowMax/3);
  dbgMessageBaseX = fontSize/2;
  dbgMessageBaseY = lineHeight*1.25;
  UnitRatio = 21;
  CoordScale = 4;
  CUnitRatio = UnitRatio*CoordScale;
  UnitSize = viewMin/UnitRatio;
  CUnitSize = viewMin/CUnitRatio;
  HSize = UnitSize;
  WSize = UnitSize*7;
  x = viewOX;
  CBXStep = round(CUnitRatio/2)
  CBYStep = CUnitRatio-CoordScale*3;
  CBDX = 1;
  CBDY = -1;
  RacketBound = false; // true; //
  palette = [ '#FF0000', '#FF8C00', '#FFFF00', 
      '#32CD32', '#87CEFA', '#0000CD', '#800080' ];
  pc = 0;
  a2Block = Array();
  for(let i = 2; i<=10; i++){
    a2Block[i] = Array();
    for(let j = 2; j<=18; j+=2){
      a2Block[i][j] = palette[pc];
      pc++;
      pc = pc%palette.length;
    }
  }
  Lose = false; // true; //
  BackColor = "#7f7f7f";
  frameRate(30); 
  smooth(); // アンチエイリアス(図形のエッジを滑らかにする)
  noStroke();
  background(BackColor);
}

function draw() {
  background(BackColor);
  
  for(let i = 0; i<a2Block.length; i++){
    if(a2Block[i]){
      for(let j = 0; j<a2Block[i].length; j++){
        if(a2Block[i][j]){
          tx1 = j*UnitSize;
          ty1 = i*UnitSize;
          tx2 = tx1+UnitSize;
          ty2 = ty1+UnitSize;
          tx0 = tx1+UnitSize/2;
          ty0 = ty1+UnitSize/2;
          fill(a2Block[i][j]); 
          // ellipse(tx0,ty0,UnitSize,UnitSize);
          rect(tx1, ty1, UnitSize,UnitSize); 
        }
      }
    }
  }
  
  fill("#ffffff"); 
  dbgMessageX = dbgMessageBaseX;
  dbgMessageY = dbgMessageBaseY;
  dbgMessage("Hello World");
  dbgMessage("windowWidth="+windowWidth);
  dbgMessage("windowHeight="+windowHeight);
  dbgMessage("bodyClientWidth="+bodyClientWidth);
  dbgMessage("bodyClientHeight="+bodyClientHeight);
  dbgMessage("width="+width);
  dbgMessage("height="+height);
  dbgMessage("fontSize="+fontSize);
  dbgMessage("lineHeight="+lineHeight);
  dbgMessage("lineHeight="+lineHeight);
  dbgMessage("mouseX="+mouseX);
  dbgMessage("mouseY="+mouseY);

  CBXNStep = CBXStep+CBDX;
  CBYNStep = CBYStep+CBDY;
  x = mouseX;
  if(x<(WSize/2-UnitSize/2)){
    x = WSize/2-UnitSize/2;
  }
  if((width-(WSize/2+UnitSize/2))<x){
    x = width-(WSize/2+UnitSize/2);
  }
  CXStep = floor(x/CUnitSize);
  tx = round(CXStep*CUnitSize+UnitSize/2);
  ty = height-HSize;
  tx0 = tx;
  ty0 = ty;
  txp = WSize;
  typ = HSize;
  tx1 = tx0-txp/2;
  ty1 = ty0;
  tx2 = tx0+txp/2;
  ty2 = ty0+typ;
  // #DAA520 #CD853F #808000 #008B8B #008080
  fill("#008080"); 
  rect(tx1, ty1, txp, typ);
  if(Lose){
     // noLoop();
  }
  CheckConflict(tx1,ty1,tx2,ty2,true);
  
  fill("#ffffff"); 
  dbgMessage("CBXStep="+CBXStep);
  dbgMessage("CBYStep="+CBYStep);
  for(let i = 0; i<a2Block.length; i++){
    if(a2Block[i]){
      for(let j = 0; j<a2Block[i].length; j++){
        if(a2Block[i][j]){
          tx1 = j*UnitSize;
          ty1 = i*UnitSize;
          tx2 = tx1+UnitSize;
          ty2 = ty1+UnitSize;
          if(CheckConflict(tx1,ty1,tx2,ty2,false)){
            a2Block[i][j] = null;
          }
        }
      }
    }
  }
  
  fill("#ffffff"); 
  ex = round(CBXNStep*CUnitSize);
  ey = round(CBYNStep*CUnitSize);
  ex1 = ex;
  ey1 = ey;
  ex2 = ex1+UnitSize;
  ey2 = ey1+UnitSize;
  ex0 = ex1+UnitSize/2;
  ey0 = ey1+UnitSize/2;
  bound = false; // true; //
  if(ex1<0 || width<ex2){
    bound = true; // false; //
    CBDX = -CBDX;
  }
  if(height<ey2){
    Lose = true; // false; //
    bound = true; // false; //
  }
  if(ey1<0 || height<ey2){
    bound = true; // false; //
    CBDY = -CBDY;
  }
  if( ! Lose ){
    fill("#ffffff"); 
    ellipse(ex0,ey0,UnitSize,UnitSize); 
    CBXStep += CBDX;
    CBYStep += CBDY;
  }
}

function CheckConflict(tx1,ty1,tx2,ty2,racket){
  ex = round(CBXNStep*CUnitSize);
  ey = round(CBYNStep*CUnitSize);
  ex1 = ex;
  ey1 = ey;
  ex2 = ex1+UnitSize;
  ey2 = ey1+UnitSize;
  ex0 = ex1+UnitSize/2;
  ey0 = ey1+UnitSize/2;
  bound = false; // true; //
  CBDXW = CBDX;
  CBDYW = CBDY;
  if( tx1 <= ex2 && ex1 <= tx2 && ty1 <= ey2 && ey1 <= ty2 ){
    bound = true; // false; //
    CBDYW = -CBDY;
    rnd = random();
    if( racket && CBDX!==0 ) {
       if( rnd<0.2 ){
        CBDXW = sign(CBDX)*2;
        CBDYW = sign(CBDYW);
      }else  if( rnd<0.35 ){
        CBDXW = 0;
        CBDYW = sign(CBDYW)*2;
      }
    }else if( CBDX===0 && rnd<0.7 ) {
      CBDXW = ( random()<0.5 ) ? -1 : 1;
      CBDYW = sign(CBDYW);
    }
  }else if( tx1 <= ex2 && ex1 <= tx1 && ty1 <= ey2 && ey1 <= ty1 ){
    bound = true; // false; //
    CBDXW = -abs(CBDX);
    if(racket){
      CBDYW = -abs(CBDY);
    }else{
      CBDYW = ( CBDX!==0 ) ? -sign(CBDY) : CBDY;
    }
  }else if( tx2 <= ex2 && ex1 <= tx2 && ty1 <= ey2 && ey1 <= ty2 ){
    bound = true; // false; //
    CBDXW = abs(CBDX);
    if(racket){
      CBDYW = -abs(CBDY);
    }else{
      CBDYW = ( CBDX!==0 ) ? -sign(CBDY) : CBDY;
    }
  }
  racket = racket & RacketBound;
  if( bound && ( ! racket ) ){
    CBDX = CBDXW;
    CBDY = CBDYW;
  }
  if( bound && ( ! racket ) ){
    RacketBound = bound;
  }else if( ( ! bound ) && racket ){
    RacketBound = bound;
  }
  return bound;
}
