function DbgMessage(tx) {
  if (height < DbgMessageY + LineHeight) {
    DbgMessageY = DbgMessageBaseY;
    DbgMessageX += DbgMessageW;
  }
  text(tx, DbgMessageX, DbgMessageY);
  DbgMessageY += LineHeight;
}

// #EE82EE #FFA500 #00FFFF
Indication_Hour_Color = "#FFA500";
Indication_Hour_RL = 0.65;
Indication_Hour_RHWH = 0.045;
Indication_Hour_RHWF = 0.07;
Indication_Minute_Color = "#00FFFF";
Indication_Minute_RL = 0.8;
Indication_Minute_RHWH = 0.025;
Indication_Minute_RHWF = 0.045;
Indication_Second_Color = "#FF0000";
Indication_Second_RL = 0.9;
Indication_Second_RHWH = 0.01;
Indication_Second_RHWF = 0.02;
Indication_Shaft_Color = "#ffffff";
Indication_Shaft_RR = 0.075;

Indication_Hour_HWH = 0;
Indication_Hour_HWF = 0;
Indication_Minute_HWH = 0;
Indication_Minute_HWF = 0;
Indication_Second_HWH = 0;
Indication_Second_HWF = 0;
Indication_Shaft_R = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ViewMinimum = min(width, height);
  ViewMaximum = max(width, height);
  ViewOX = width / 2;
  ViewOY = height / 2;
  BackColor = "#000000";
  FontFamily = "MS PMincho";
  textFont(FontFamily);
  // FontSize = ceil(textWidth('╋'));
  FontSize = round(ViewMinimum / 48);
  textSize(FontSize);
  // lineSpace = 2;
  LineHeight = round(FontSize);
  DbgMessageW = floor(ViewMaximum / 3);
  DbgMessageBaseX = FontSize / 2;
  DbgMessageBaseY = LineHeight * 1.25;
  smooth(); // アンチエイリアス(図形のエッジを滑らかにする)
  frameRate(8);

  Indication_Hour_L = (ViewMinimum * Indication_Hour_RL) / 2-20;
  Indication_Hour_HWH = (ViewMinimum * Indication_Hour_RHWH) / 2;
  Indication_Hour_HWF = (ViewMinimum * Indication_Hour_RHWF) / 2;
  Indication_Minute_L = (ViewMinimum * Indication_Minute_RL) / 2-20;
  Indication_Minute_HWH = (ViewMinimum * Indication_Minute_RHWH) / 2;
  Indication_Minute_HWF = (ViewMinimum * Indication_Minute_RHWF) / 2;
  Indication_Second_L = (ViewMinimum * Indication_Second_RL) / 2-20;
  Indication_Second_HWH = (ViewMinimum * Indication_Second_RHWH) / 2;
  Indication_Second_HWF = (ViewMinimum * Indication_Second_RHWF) / 2;
  Indication_Shaft_R = (ViewMinimum * Indication_Shaft_RR) / 2;
}

function draw() {
  background(BackColor);
  fill("#ffffff"); // 塗りつぶし
  DbgMessageX = DbgMessageBaseX;
  DbgMessageY = DbgMessageBaseY;
  DbgMessage("Hello World");
  DbgMessage("width=" + width);
  DbgMessage("height=" + height);
  DbgMessage("FontSize=" + FontSize);
  DbgMessage("LineHeight=" + LineHeight);
  // resetMatrix();
  translate(ViewOX, ViewOY);
  DrawIndication(
    Indication_Hour_Color,
    (hour() % 12) / 12,
    Indication_Hour_L,
    Indication_Hour_HWH,
    Indication_Hour_HWF
  );
  DrawIndication(
    Indication_Minute_Color,
    minute() / 60,
    Indication_Minute_L,
    Indication_Minute_HWH,
    Indication_Minute_HWF
  );
  DrawIndication(
    Indication_Second_Color,
    second() / 60,
    Indication_Second_L,
    Indication_Second_HWH,
    Indication_Second_HWF
  );
  fill(Indication_Shaft_Color); // 塗りつぶし
  ellipse(0, 0, Indication_Shaft_R * 2, Indication_Shaft_R * 2);
}

function DrawIndication(c, ra, r, hwh, hwf) {
  // let r, hwh, hwf, d;
  // let hwxn, hwyn, hwxp, hwyp;
  let x, y, x0, y0, x1, y1;
  let vqpxp, vqpyp, vqpxn, vqpyn;
  let d = TWO_PI * ra - HALF_PI;
  x1 = cos(d) * r;
  y1 = sin(d) * r;
  vqpxp = cos(d - QUARTER_PI);
  vqpyp = sin(d - QUARTER_PI);
  vqpxn = cos(d + QUARTER_PI);
  vqpyn = sin(d + QUARTER_PI);
  noStroke();
  fill(c); // 塗りつぶし
  beginShape();
  vertex(vqpxn * hwf, vqpyn * hwf);
  vertex(vqpxp * hwf, vqpyp * hwf);
  vertex(x1 + vqpxp * hwh, y1 + vqpyp * hwh);
  vertex(x1 + vqpxn * hwh, y1 + vqpyn * hwh);
  endShape(CLOSE);
}
