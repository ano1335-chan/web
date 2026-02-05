geDeviceType = {
  PC: Math.pow(2, 0),
  Tab: Math.pow(2, 1),
  SP: Math.pow(2, 2),
};

Get_DeviceType = function () {
  let res;
  let ua = navigator.userAgent;
  if (ua.match(/(iPhone|iPod|Android.*Mobile)/i)) {
    res = geDeviceType.SP;
  } else if (ua.match(/iPad|Android|Silk|Kindle/i)) {
    res = geDeviceType.Tab;
  } else {
    res = geDeviceType.PC;
  }
  return res;
};

Check_DeviceType = function (cdt) {
  if (!cdt) {
    throw new Error('Error: Invalid value for "Check_DeviceType()" parameter.');
  }
  let gdt = Get_DeviceType();
  let res = 0 < (gdt & cdt);
  return res;
};

RubyEncoder = function () {
  let d1wSource = document.getElementsByName("nmSource");
  // rep = document.getElementById("nmSource").value;
  let d1wDisplay = document.getElementsByName("nmDisplay");
  // console.log(str);
  for (let i = 0; i < d1wSource.length; i++) {
    console.log(`i: ${i}`);
    let rep = d1wSource[i].value;
    rep = rep
      .replace(/^ +/gs, '')
      .replace(/ +$/gs, '')
      .replace(/・/gs, '･')
      .replace(/（/gs, '(').replace(/）/gs, ')')
      .replace(/”/gs, '"').replace(/’/gs, "'")
      .replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
      })
      .replace(/([^・･ ぁ-ゖァ-ヶーＡ-Ｚａ-ｚ０-９＿\w、，,。．.：…～＝=←↑→＊\*／\/※§☆★○●◎◇◆□■△▲▽▼＜＞《》「」『』【】｛｝{}（）\(\)”’\"\'][^ ぁ-ゖァ-ヶーＡ-Ｚａ-ｚ０-９＿\w、，,。．.：…～＝=←↑→＊\*／\/※§☆★○●◎◇◆□■△▲▽▼＜＞《》「」『』【】｛｝{}（）\(\)”’\"\']*)[（\(]([ぁ-ゖァ-ヶー・･]+)[）\)]/gs,
        '<ruby><rb>$1</rb><rp>(</rp><rt>$2</rt><rp>)</rp></ruby>')
      // .replace(/([^ ぁ-ゖァ-ヶＡ-Ｚａ-ｚ０-９＿\w、，,。．.：…～＝←↑→＊※§☆★○●◎◇◆□■△▲▽▼＜＞《》「」『』【】｛｝{}（）()”’\"\']+)[（(]([ぁ-ゖァ-ヶ・･]+) ?([ぁ-ゖァ-ヶ・･]*?)[）)]/gs,
      // '<ruby><rb>$1</rb><rp>(</rp><rt>$2$3</rt><rp>)</rp></ruby>')
      .replace(/ *(\x0D\x0A|\x0A|\x0D|\n)/gs, '<br>\n');
    d1wDisplay[i].innerHTML = rep;
    // d1wSource[i].value = "";
    // [・][^ ぁ-ゖァ-ヶーＡ-Ｚａ-ｚ０-９＜＞（）”’]+（[ぁ-ゖァ-ヶー]+）
  }
  // console.log(rep);
};

let dtpc = Check_DeviceType(geDeviceType.PC);
// 複数･条件をチェックしたい場合は論理和「||(OR)」で演算すれば良い。
// 「|(OR)」だとビット論理和になってしまうので要注意。
let dtmv =
  Check_DeviceType(geDeviceType.Tab) || Check_DeviceType(geDeviceType.SP);
console.log(`dtpc: ${dtpc}`);
console.log(`dtmv: ${dtmv}`);
let a1wRemark_PC = document.getElementsByClassName("Remark_PC");
let a1wRemark_Mobile = document.getElementsByClassName("Remark_Mobile");
console.log(`a1wRemark_PC.length: ${a1wRemark_PC.length}`);
console.log(a1wRemark_PC);
for (let rm of a1wRemark_PC) {
  if (!dtpc) {
    rm.style.display = 'none';
  } else {
    rm.style.display = 'block';
  }
  console.log(`rm.style.display: ${rm.style.display}`);
}
for (let rm of a1wRemark_Mobile) {
  if (dtpc) {
    rm.style.display = 'none';
  } else {
    rm.style.display = 'block';
  }
  console.log(`rm.style.display: ${rm.style.display}`);
}
RubyEncoder();
