function DbgMessage(tx) {
    if (height < (DbgMessageY + LineHeight)) {
        DbgMessageY = DbgMessageBaseY;
        DbgMessageX += DbgMessageW;
    }
    text(tx, DbgMessageX, DbgMessageY);
    DbgMessageY += LineHeight;
}

let FrameInterval;
let ViewOX, ViewOY;
let ViewMinimum, ViewMaximum;
let BackColor = "#7f7f7f";
let al1X = new Array();
let al1YWalk = new Array();
let al1OWalk = new Array();
let Radius;
let Quantity = 0;
let XMin, XMax;
let YStep;
let YStride;

// Delivery
let DInterval = 1.2; // s
let DWalk;
let DStep;
let DStride;

// Interval
let IStep;
let IStride;

// Opacity
let OStep = YStep;
let OStride;

function setup() {
    createCanvas(windowWidth, windowHeight);
    ViewMinimum = min(width, height);
    ViewMaximum = max(width, height);
    ViewOX = width / 2;
    ViewOY = height / 2;
    FontFamily = 'MS PMincho';
    textFont(FontFamily);
    // FontSize = ceil(textWidth('╋'));
    FontSize = round(ViewMinimum / 48);
    textSize(FontSize);
    // lineSpace = 2;
    LineHeight = round(FontSize);
    DbgMessageW = floor(ViewMaximum / 3);
    DbgMessageBaseX = round(FontSize / 2);
    DbgMessageBaseY = round(LineHeight * 1.25);
    FrameInterval = 1 / frameRate();
    Radius = round(ViewMinimum * 0.035);
    XMin = width / 7;
    XMax = width / 7 * 6;
    YStep = round(ViewMinimum * 1.3);
    // DStep = round(DInterval/FrameInterval);
    DStep = round(Radius * 3.5);
    OStep = YStep;
    DWalk = DStep + 1;
    noStroke();
    smooth(); // アンチエイリアス(図形のエッジを滑らかにする)
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
    if (DStep < DWalk) {
        console.log("if (DStep<DWalk)");
        DWalk = 0;
        al1X.push(random(XMin, XMax));
        al1YWalk.push(0);
        al1OWalk.push(0);
    }
    for (let i = al1YWalk.length - 1; 0 <= i; i--) {
        console.log("i=" + i);
        let Y, O;
        Y = al1YWalk[i] / YStep * height;
        O = (1 - al1OWalk[i] / OStep) * 255;
        if (height < Y) {
            al1X.splice(i, 1);
            al1YWalk.splice(i, 1);
            al1OWalk.splice(i, 1);
            continue;
        }
        fill(255, 255, 255, O);
        ellipse(al1X[i], Y, Radius * 2, Radius * 2);
        al1YWalk[i] = al1YWalk[i] + 1;
        al1OWalk[i] = al1OWalk[i] + 1;
    }
    DWalk++;
}
