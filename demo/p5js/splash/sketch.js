function DbgMessage(tx) {
    if (height < DbgMessageY + LineHeight) {
        DbgMessageY = DbgMessageBaseY;
        DbgMessageX += DbgMessageW;
    }
    text(tx, DbgMessageX, DbgMessageY);
    DbgMessageY += LineHeight;
}

let circleGross, circleGrossBias, diminutiveGross, diminutiveGrossBias;
let circleQuantity = 300;
let step = new Array(circleQuantity);
let circle = new Array(circleQuantity);
let dx = new Array(circleQuantity);
let dy = new Array(circleQuantity);

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
    DbgMessageBaseX = FontSize / 2;
    DbgMessageBaseY = LineHeight * 1.25;
    smooth(); // アンチエイリアス(図形のエッジを滑らかにする)
    noStroke();
    BackColor = '#000000';
    circleGross = ViewMinimum * 0.05;
    circleGrossBias = ViewMinimum * 0.01666;
    diminutiveGross = ViewMinimum * 0.0333;
    diminutiveGrossBias = -ViewMinimum * 0.01666;
    for (let i = 0; i < circle.length; i++) {
        SetCircle(i);
    }
}

function draw() {
    background(BackColor);
    fill('#ffffff'); // 塗りつぶし
    DbgMessageX = DbgMessageBaseX;
    DbgMessageY = DbgMessageBaseY;
    DbgMessage('Hello World');
    DbgMessage('width=' + width);
    DbgMessage('height=' + height);
    DbgMessage('FontSize=' + FontSize);
    DbgMessage('LineHeight=' + LineHeight);
    fill(255, 255, 255, 180);
    for (let i = 0; i < circle.length; i++) {
        if (OutOfRange(i)) {
            SetCircle(i);
        }
        ellipse(
            ViewOX + dx[i] * step[i],
            ViewOY + dy[i] * step[i],
            circle[i],
            circle[i]
        );
        step[i]++;
    }
}

function SetCircle(i) {
    step[i] = 0;
    circle[i] = random(circleGross) + circleGrossBias;
    dx[i] = random(diminutiveGross) + diminutiveGrossBias;
    dy[i] = random(diminutiveGross) + diminutiveGrossBias;
}

function OutOfRange(i) {
    let res =
        0 - circle[i] > ViewOX + dx[i] * step[i] ||
        width + circle[i] < ViewOX + dx[i] * step[i] ||
        0 - circle[i] > ViewOY + dy[i] * step[i] ||
        height + circle[i] < ViewOY + dy[i] * step[i];
    return res;
}
