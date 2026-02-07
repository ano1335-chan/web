// p5.js processing

function signum(x){
    return Math.sign(x);
}

function dbgMessage(tx){
  if( height<(dbgMessageY+lineHeight) ){
    dbgMessageY = dbgMessageBaseY;
    dbgMessageX += dbgMessageW;
  }
  text(tx,dbgMessageX,dbgMessageY);
  dbgMessageY += lineHeight;
}

// let viewOX,viewOY;
a1voOrbitDsp = new Array(5);
a1vcPallet = ['#077', '#707', '#770', '#00f', '#0f0', '#f00'];

function setup() {
    createCanvas(windowWidth, windowHeight);
    viewMinimum = min(width, height);
    viewMaximum = max(width, height);
    viewOX = width / 2;
    viewOY = height / 2;
    backColor = "#000";
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
    let s = 1;
    for (let i = 0; i < a1voOrbitDsp.length; i++) {
        let o = new OrbitDspClass(viewOX, viewOY, (i + 2) * viewMinimum/2/(a1voOrbitDsp.length+2),
            new CircleDspClass(0, 0, 0.03*viewMinimum, a1vcPallet[i]));
        a1voOrbitDsp[i] = o;
        o.walk = 0;
        o.stride = s * degrees(15 / (o.radius * TWO_PI));
        o.fdistance = 0;
        s = -s;
    }
    smooth(); // アンチエイリアス(図形のエッジを滑らかにする)
    frameRate(20);
}

function mouseClicked() { 
    for (let i = 0; i < a1voOrbitDsp.length; i++) {
        let o = a1voOrbitDsp[i];
        if(0===o.step){
        let s = 0;
        s = signum(o.stride);
        o.fdistance = s * 120;
        o.step = round(abs(o.fdistance / o.stride));
        }
    }
}

function draw() {
    background(backColor);
    fill("#ffffff"); // 塗りつぶし
    dbgMessageX = dbgMessageBaseX;
    dbgMessageY = dbgMessageBaseY;
    dbgMessage("Hello World");
    dbgMessage("width="+width);
    dbgMessage("height="+height);
    dbgMessage("fontSize="+fontSize);
    dbgMessage("lineHeight="+lineHeight);
    for (let i = 0; i < a1voOrbitDsp.length; i++) {
        a1voOrbitDsp[i].draw();
    }
    resetMatrix();
    fill('#fff');
    ellipse(viewOX, viewOY, 0.02*viewMinimum, 0.02*viewMinimum);
}

class CircleDspClass {
    constructor(cox, coy, cr, cc) {
        this.ox = cox;
        this.oy = coy;
        this.radius = cr;
        this.c = cc;
    }
    draw() {
        fill(this.c);
        ellipse(this.ox, this.oy, this.radius * 2, this.radius * 2);
    }
}

class OrbitDspClass {
    // var s;
    // var ox,oy,radius,rd,d,stride,fdistance;
    // var step,walk;
    // CircleDspClass cd;
    constructor(oox, ooy, or, ocd) {
        this.step = 0;
        this.fdistance = 0;
        this.walk = 0;
        this.degree = 0;
        this.ox = oox;
        this.oy = ooy;
        this.radius = or;
        this.cd = ocd;
    }
    draw() {
        let x, y, cdx, cdy, dd , d;
        dd = 0;
        if (0 < this.step) {
            dd = this.walk * (this.fdistance / this.step);
        }
        x = cos(radians(this.degree + dd)) * this.radius;
        y = sin(radians(this.degree + dd)) * this.radius;
        resetMatrix();
        translate(this.ox + x, this.oy + y);
        this.cd.draw();
        if (0 < this.step) {
            this.walk++;
            if (this.step < this.walk) {
                this.step = 0;
                this.walk = 0;
                this.degree = this.degree + dd;
                d = floor(this.degree/360);
                this.degree = this.degree-(d*360);
            }
        }
    }
}
